import Base from '../base.js'

export default class MeApi extends Base {
  constructor() {
    super({
      apiPrefix: import.meta.env.PUBLIC_API_URL || ''
    })
  }

  get() {
    return this.fetch('/me', {method: 'GET'})
  }

  post(data) {
    return this.fetch('/me', {method: 'POST', body: data})
  }
}