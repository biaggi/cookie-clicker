import { PluralizePipe } from './pluralize.pipe'

describe('PluralizePipe', () => {
  it('create an instance', () => {
    const pipe = new PluralizePipe()
    expect(pipe).toBeTruthy()
  })
  it('should pluralize camión to camiones', () => {
    const pipe = new PluralizePipe()
    expect(pipe.transform('camión')).toBe('camiones')
  })
  it('should pluralize riego to riegos', () => {
    const pipe = new PluralizePipe()
    expect(pipe.transform('riego')).toBe('riegos')
  })
})
