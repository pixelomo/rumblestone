export const setRegion = (region) => {
    return (dispatch) => {
        dispatch({ 
            type: 'SET_REGION', 
            region: region
        })
    }
}