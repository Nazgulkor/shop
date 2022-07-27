export let setItemToBasket = (item) => ({
    type : 'SET_ITEM_IN_BASKET',
    payload : item
})

export let setDecrAndIncr = (type, item) => ({
    type : type,
    payload : item
})

export let deleteFromBasket = (item) => ({
    type : 'DELETE_FROM_BASKET',
    payload : item
})
export let clearBasket = () => ({
    type : 'CLEAR_BASKET',
})