export const setUser = (user) => {
    return (dispatch) => {
        dispatch({ 
            type: 'SET_USER', 
            user: user
        })
    }
}

export const logoutUser = (user) => {
    return (dispatch) => {
        dispatch({ 
            type: 'LOGOUT_USER', 
            user: user
        })
    }
}