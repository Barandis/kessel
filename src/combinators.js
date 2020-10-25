// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { failure, Parser } from './core'

export const desc = (p, str) => Parser(state => {
  const nextState = p(state)
  if (!nextState.success) {
    return failure(nextState, { expected: [str] })
  }
  return nextState
})

export const back = p => Parser(state => {
  const index = state.index
  const nextState = p(state)
  if (nextState.success) return nextState
  return failure(nextState, { index })
})

export const alt = (...ps) => Parser(state => {
  let nextState = state
  let expecteds = []

  for (const p of ps) {
    nextState = p({ ...nextState, expected: [] })
    if (nextState.success) return nextState
    expecteds = [...expecteds, ...nextState.expected]
  }

  return failure(nextState, { expected: expecteds })
})
