import { Promise } from "bluebird";
import { fetch as fetchPolyfill } from "whatwg-fetch";
import utils from "./utils";

class DataLoader {
    _requestsMap = {}
    setCommonHeaders () {

    }
    setResponseParser () {
    
    }
    setRequestParser () {

    }
    addRequestConfig (requestId, requestConfig) {
        this._requestsMap[requestId] = requestConfig;
    }
    getRequestDef({ requestId, params = {} }) {
        const requestConfig = this._requestsMap[requestId];
        const { url, method = "GET", paramParser = {} } = requestConfig;

        let requestUrl = (typeof(url) === "function") ? url(params) : url;

        let requestMetadata = {
            method: method
        };

        if (method.toLowerCase() === "get") {
            requestUrl = `${url}?${utils.getQueryParams(params)}`;
        } else {
            requestMetadata.body = new FormData(params);
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