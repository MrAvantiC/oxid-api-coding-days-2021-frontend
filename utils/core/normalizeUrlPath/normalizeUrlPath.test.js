import { normalizeUrlPath } from '../..'

describe('normalizeUrlPath()', () => {
  it('should remove leading slash', () => {
    const path = '/Kiteboards/'
    const formatted = normalizeUrlPath(path)
    expect(formatted.startsWith('/')).toEqual(false)
  })

  it('should add trailing slash', () => {
    const path = 'Kiteboards'
    const formatted = normalizeUrlPath(path)
    expect(formatted).toEqual('Kiteboards/')
  })

  it('should not add trailing slash when path ends with ".html"', () => {
    const path = 'Kiteboards.html'
    const formatted = normalizeUrlPath(path)
    expect(formatted).toEqual('Kiteboards.html')
  })

  it('should keep all other slashes"', () => {
    const path = '/Bekleidung/Fashion/Fuer-Sie/'
    const formatted = normalizeUrlPath(path)
    expect(formatted).toEqual('Bekleidung/Fashion/Fuer-Sie/')
  })
})
