let initState = {
    basketItems : []
}

let basket = (state= initState, action) => {
    if(action.type === 'SET_ITEM_IN_BASKET'){
        return {
            ...state,
            basketItems : state.basketItems.concat(action.payload),
            
        }
    }

    return state
}

export default basket;