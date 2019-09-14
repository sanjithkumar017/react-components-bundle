const utils = {
    getQueryParams: function(params = {}) {
        let queryParams = [];
        
        queryParams = Object.keys(params).map(key => {
            return `${key}=${params[key]}`;
        });

        return queryParams.join("&");
    }
}

export default utils;