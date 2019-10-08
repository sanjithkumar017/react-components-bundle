import { Promise } from "bluebird";
import { fetch as fetchPolyfill } from "whatwg-fetch";
import utils from "./utils";

class DataLoader {
    _requestsMap = {}
    _commonHeaders = {}
    setCommonHeaders (headers) {
        this._commonHeaders = {...this._commonHeaders, ...headers};
    }
    setResponseParser () {
    
    }
    setRequestParser () {

    }
    addRequestConfig (requestId, requestConfig) {
        this._requestsMap[requestId] = requestConfig;
    }
    getRequestDef({ requestId, params = {}, headers = {} }) {
        const requestConfig = this._requestsMap[requestId];
        const { url, method = "GET", paramParser = {} } = requestConfig;

        let requestUrl = (typeof(url) === "function") ? url(params) : url;
        let reqMethod = method.toLowerCase();

        let requestMetadata = {
            method: (reqMethod === "form_post" || reqMethod === "upload") ? "post" : method,
            headers: {...this._commonHeaders, ...headers}
        };


        if (reqMethod === "get") {
            requestUrl = `${url}?${utils.getQueryParams(params)}`;
        } else  if (["post", "delete", "put", "patch"].indexOf(reqMethod) > -1) {
            requestMetadata.body = JSON.stringify(params);
        } else if (reqMethod === "form_post" || reqMethod === "upload") {
            const formData = new FormData();
            for (const key in params) {
                formData.append(key, params[key]);
            }
            requestMetadata.body = formData;
        }

        return new Promise((resolve, reject) => {
            return fetchPolyfill(requestUrl, requestMetadata)
                .then(response => response.json())
                .then(json =>{
                    resolve(json);
                })
                .catch(exception => {
                    reject(exception);
                });
        });
    }
}

export default new DataLoader();