export let setItems = (items) => {
    return{
        type : 'SET_ITEMS',
        payload : items}
};

export let filterItems = (type, items) => ({
    type : type,
    payload : items
})