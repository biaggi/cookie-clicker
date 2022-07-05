import * as reducer from './user.reducer'
import * as actions from './user.actions'

describe('user Reducer', () => {
  it('unknown action', () => {
    const state = reducer.userReducer('', {
      type: 'unknown'
    })
    expect(state).toBe('')
  })

  it('crear usuario', () => {
    const state = reducer.userReducer('', actions.createUser({ name: 'jose' }))
    expect(state).toBe('jose')
  })
})
