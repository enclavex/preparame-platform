function urlQueryBuilder(url, cols) {
    let queryString = "";

    url = `/${url}`;

    if (cols) {
        cols.forEach((filter) => {
            if (filter.model) {
                if (queryString) {
                    queryString += "&";
                }

                if (filter.model.label) {
                    queryString += `${filter.name}=${filter.model.value}`;
                } else {
                    queryString += `${filter.name}=${filter.model}`;
                }
            }
        });

        if (queryString) {
            url += `?${queryString}`;
        }
    }

    return url
}

export { urlQueryBuilder }