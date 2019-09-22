const utils = {
    getQueryParams: function(params = {}) {
        let queryParams = [];
        
        queryParams = Object.keys(params).map(key => {
            return `${key}=${params[key]}`;
        });

        return queryParams.join("&");
    },
    isEven: function(value) {
        return value % 2 === 0;
    }
}

export default utils;