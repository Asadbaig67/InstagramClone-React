//Functions 

export const UserData = () => {

    return (dispatch) => {
        dispatch({
            type: 'data',
            // payload: InitialSate
        })
    }
}


export const lightmode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'light',
            payload: mode
        })
    }

}
export const darkmode = (mode) => {
    return (dispatch) => {
        dispatch({
            type: 'dark',
            payload: mode
        })
    }

}