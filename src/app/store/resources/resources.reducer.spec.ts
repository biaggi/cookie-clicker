import * as reducer from './resources.reducer'
import * as actions from './resources.actions'

describe('user Reducer', () => {
  it('unknown action', () => {
    const state = reducer.resourceReducer(reducer.initialState, {
      type: 'unknown'
    })
    expect(state).toBe(reducer.initialState)
  })

  it('add resource', () => {
    const state = reducer.resourceReducer(
      reducer.initialState,
      actions.produceResource({ quantity: 1 })
    )
    expect(state.quantity).toBe(10001)
  })

  it('consume resource', () => {
    const state = reducer.resourceReducer(
      reducer.initialState,
      actions.consumeResource({ quantity: 1 })
    )
    expect(state.quantity).toBe(9999)
  })
})
