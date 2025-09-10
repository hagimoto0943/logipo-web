import Base from '../base.js'

export default class ReviewApi extends Base {
  constructor() {
    super({
      apiPrefix: import.meta.env.PUBLIC_API_URL || ''
    })
  }

  getList() {
    return this.fetch('/activity/reviews', {method: 'GET'})
  }

  getById(id) {
    return this.fetch(`/activity/reviews/${id}`, {method: 'GET'})
  }

  post(data) {
    return this.fetch('/activity/reviews', {method: 'POST', body: data})
  }
}