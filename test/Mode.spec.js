const { mode } = require('../index.js')

const setMode = (m) => {
  process.env.NODE_ENV = m
}

describe('Mode', () => {
  /**
  * MODE
  **/

  beforeEach(() => { setMode('test') })
  afterEach(() => { setMode('test') })

  it('should crash when mode does not exist', () => {
    try {
      mode('*', 'dev', 'prod')
    } catch (e) {
      expect(e.message).toEqual('Mode test not found')
    }
  })

  it('should be work with development and production full', () => {
    setMode('development')
    let str = mode('*', 'dev', 'prod')
    expect(str).toEqual('dev')
    setMode('production')
    str = mode('*', 'dev', 'prod')
    expect(str).toEqual('prod')
  })

  it('should be work with development and production partial', () => {
    setMode('development')
    let str = mode('*:3000', 'dev', 'prod')
    expect(str).toEqual('dev:3000')
    setMode('production')
    str = mode('*:3000', 'dev', 'prod')
    expect(str).toEqual('prod:3000')
  })

  it('should be work with development, staging and production', () => {
    setMode('development')
    let str = mode('mongodb://*:3000', 'dev', 'stage', 'prod')
    expect(str).toEqual('mongodb://dev:3000')
    setMode('staging')
    str = mode('mongodb://*:3000', 'dev', 'stage', 'prod')
    expect(str).toEqual('mongodb://stage:3000')
    setMode('production')
    str = mode('mongodb://*:3000', 'dev', 'stage', 'prod')
    expect(str).toEqual('mongodb://prod:3000')
  })

  it('should be work with development only', () => {
    setMode('development')
    let str = mode('mongodb://*:3000', 'dev')
    expect(str).toEqual('mongodb://dev:3000')
  })
})
