let initState = {
    basketItems : []
}

let basket = (state= initState, action) => {
    if(action.type === 'SET_ITEM_IN_BASKET'){
        return {
            ...state,
            basketItems : state.basketItems.concat(action.payload),
        }
    }else if(action.type === 'SET_DECREMENT'){
        return { 
            ...state,
            basketItems : state.basketItems.map((item) => {
                return item === action.payload && item.count !== 1 ? {...item, count : item.count - 1} : item
            })
        }
    }else if(action.type === 'SET_INCREMENT'){
        return { 
            ...state,
            basketItems : state.basketItems.map((item) => {
                return item === action.payload ? {...item, count : item.count + 1} : item
            })
        }
    }else if(action.type === 'DELETE_FROM_BASKET'){
        return {
            ...state,
            basketItems : state.basketItems.filter(item => item.id !== action.payload.id)
        }
    }else if(action.type === 'CLEAR_BASKET'){
        return { 
            ...state,
        basketItems : []}
    }

    return state
}

export default basket;