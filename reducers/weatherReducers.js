
export const weatherReducers = (state =
    {
        zipcode: '',
        loading: false,
        errorMsg: '',
        forecast: {
            main: '',
            description: '',
            temp: ''
        }
    }, action) => {

    switch (action.type) {
        case 'REQUEST_SEARCH':
            return {
                ...state,
                loading: !state.loading,
                zipcode: action.zipcode
            }
        case 'COMPLETE_SEARCH':
            return {
                ...state,
                loading: !state.loading,
                forecast: action.forecast
            }
        case 'ERROR_SEARCH':
            return { ...state, errorMsg: action.errorMsg }
        default:
            return state;
    }
}

