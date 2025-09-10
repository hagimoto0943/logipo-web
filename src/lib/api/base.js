import queryString from 'query-string';

export default class Base {

  constructor({apiPrefix, defaultHeaders={}}) {
    this.apiPrefix = apiPrefix ? apiPrefix : import.meta.env.PUBLIC_API_URL
    this.defaultHeaders = defaultHeaders
  }

  async fetch(path, options={}) {
    let url = `${this.apiPrefix}${path}`
    let { body } = options
    const { params, ...rest } = options

    if (params) {
      const qs = queryString.stringify( params, { arrayFormat: 'bracket' } )
      url += `?${qs}`
    }

    const headers = { ...this.defaultHeaders, ...(options.headers || {}) }

    if ( body && typeof body === 'object' && !(body instanceof FormData)) {
      body = JSON.stringify(body)
      headers['Content-Type'] = 'application/json'
    }

    const response = await fetch(url,{
      credentials: 'include',
      ...rest,
      headers,
      body,
    })

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    return response.json()
  }
}