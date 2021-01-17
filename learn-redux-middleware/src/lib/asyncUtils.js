export const createPromiseThunk = (type, promiseCreator) => {
    const [SUCCESSS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

    return param => async dispatch => {
        dispatch({type})
        try{
            const payload = await promiseCreator(param);
            dispatch({
                type: SUCCESSS,
                payload
            })
        }catch(e){
            dispatch({
                type:ERROR,
                payload: e,
                error: true
            })
        }
    }
}

export const reducerUtils = {
    initial: (data = null) => ({
        data,
        loading:false,
        error:null
    }),
    loading: (prevState = null) => ({
        data: prevState,
        loading: true,
        error: null
    }),
    success: data => ({
        data,
        loading: false,
        error: null
    }),
    error: error => ({
        data: null,
        loading: false,
        error
    })
}