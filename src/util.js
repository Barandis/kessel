/* istanbul ignore file */
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// This encoder/decoder pair is used to translate back and forth
// between a JavaScript UCS2 string and a UTF8 encoding of that string
// in a Uint8Array.
export const encoder = new TextEncoder()
export const decoder = new TextDecoder()

export function *range(start, end, step, inclusive) {
  const s = typeof end === 'number' ? start : 0
  const e = typeof end === 'number' ? end : start
  const p = typeof step === 'number' ? step === 0 ? 1 : Math.abs(step) : 1
  const i = typeof step === 'number'
    ? !!inclusive : typeof end === 'number'
      ? !!step : !!end

  const forward = s < e
  let current = s

  const finished = () => {
    if (forward) {
      return i ? current > e : current >= e
    }
    return i ? current < e : current <= e
  }

  /* eslint-disable require-atomic-updates */
  while (!finished()) {
    yield current
    current = forward ? current + p : current - p
  }
  /* eslint-enable require-atomic-updates */
}

export function viewToString(index, length, view) {
  const bytes = Uint8Array.from(
    { length },
    (_, i) => view.getUint8(index + i),
  )
  return decoder.decode(bytes)
}

export function stringToView(str) {
  return new DataView(encoder.encode(str).buffer)
}

export function charLength(str) {
  return [...str].length
}

export function nextCharWidth(index, view) {
  const byte = view.getUint8(index)
  if ((byte & 0x80) >> 7 === 0) return 1
  if ((byte & 0xe0) >> 5 === 0b110) return 2
  if ((byte & 0xf0) >> 4 === 0b1110) return 3
  if ((byte & 0xf0) >> 4 === 0b1111) return 4
  // Hopefully shouldn't happen, but here in case one of those high
  // ascii codes is used
  return 1
}

export function nextChar(index, view) {
  const width = nextCharWidth(index, view)
  return { width, next: viewToString(index, width, view) }
}

export function quote(str) {
  return `"${str}"`
}

// Comma-separates (as needed) the messages in the provided array. If
// the array is empty, the result will be an empty string; if the array
// has only one element, that element will be returned. If the array has
// two elements, they will be joined with ' or ' between them. If the
// array is longer than that, all elements will be comma-separated with
// an additional 'or' between the last two elements (Oxford comma
// style).
export function commaSeparate(messages) {
  switch (messages.length) {
    case 0: return ''
    case 1: return messages[0]
    case 2: return messages.join(' or ')
    default: {
      const msgs = messages.slice()
      const last = msgs.pop()
      return `${msgs.join(', ')}, or ${last}`
    }
  }
}
