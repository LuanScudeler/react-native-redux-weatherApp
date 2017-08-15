
export const submitZipCode = (zipcode) => {

    return function (dispatch) {
        dispatch(requestSearch(zipcode));

        fetch('http://api.openweathermap.org/data/2.5/weather?id=6322598&units=metric&APPID=73944c7326bc92c54dc67c93852b6724', {
            method: 'get'
        })
            .then(function (response) {
                return response;
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (weatherResult) {
                description = weatherResult.weather[0].description;
                temp = weatherResult.main.temp;
                main = weatherResult.weather[0].main;

                const forecast = {
                    main: main,
                    description: description,
                    temp: temp
                }

                console.log('payload:', forecast);
                
                dispatch(completeSearch(forecast));
            })
            .catch(function (ex) {
                dispatch(errorSearch(ex.message));
            });

        
    }
}

export const requestSearch = (zipcode) => {
    return {
        type: 'REQUEST_SEARCH',
        zipcode
    };
}

export const completeSearch = (forecast) => {
    return {
        type: 'COMPLETE_SEARCH',
        errorMsg: '',
        forecast
    };
}

export const errorSearch = (errorMsg) => {
    return {
        type: 'ERROR_SEARCH',
        errorMsg
    };
}