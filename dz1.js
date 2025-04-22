// @ts-check

/**
 * @typedef {Object} Params
 * @property {Record<string, string>=} [headers]
 * @property {string|Record<string, any>|ArrayBuffer=} [body]
 * @property {"json" | "text" | "document" | "buffer"} [contntType] 
 */

/**
 * @typedef {Object} ApiResponse
 * @property {Promise<string>} [json]
 * @property {Promise<string>} [string]
 * @property {Promise<string>} [document]
 * @property {Promise<string>} [buffer]
 */

/**
 * @callback RequestFunction
 * @param {string} url
 * @param {Params} params
 * @returns {Promise<ApiResponse>}
 */

/** @type {string} */
let myToken = 'asdf';

/** @type {Params} */
const defaultConfig = {
    headers: {Authorization: myToken},
};

/** @type {RequestFunction} */
function post(url, params) {
    const result = fetch(url, {
        method: 'POST', 
        headers: params.headers, 
        body: typeof params.body === 'object' && !(params.body instanceof ArrayBuffer)
        ? JSON.stringify(params.body)
        : params.body
    }).then((res) => ({
        json: res.json(),
        string: res.text(),
        document: Promise.resolve('mock-doc'),
        buffer: Promise.resolve('mock-buf'),
      }));
    return result;
}

/** @type {RequestFunction} */
function put(url, params) {
    const result = fetch(url, {
        method: 'PUT', 
        headers: params.headers, 
        body: typeof params.body === 'object' && !(params.body instanceof ArrayBuffer)
        ? JSON.stringify(params.body)
        : params.body
    }).then((res) => ({
        json: res.json(),
        string: res.text(),
        document: Promise.resolve('mock-doc'),
        buffer: Promise.resolve('mock-buf'),
      }));
    return result;
}
