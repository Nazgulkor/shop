let initState = {
    pageNumber : 1
}

let paginate = (state = initState,action) => {
    if(action.type == 'SET_PAGINATE_NUMBER'){
        return {
            ...state, 
            pageNumber : action.payload
        }
    }
    return state
}

export default paginate