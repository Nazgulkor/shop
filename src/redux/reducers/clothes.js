let initState = {
    items : [],
    infoPopupItem : {},
    clotheType : '',
    
}

let clothes = (state = initState, action) => {
    if(action.type === 'SET_ITEMS'){
        return { 
            ...state,
                items : action.payload,
                clotheType : ''
        }
    }else if(action.type === 'FILTER_FOR_MEN'){
        return {
            ...state,
                items : action.payload.filter(item => item.category === "men's clothing"),
                clotheType : action.type
        }
    }else if(action.type === 'FILTER_FOR_WOMEN'){
        return {
            ...state,
                items : action.payload.filter(item => item.category === "women's clothing"),
                clotheType : action.type
        }
    }else if(action.type === 'FILTER_JEWELERY'){
        return {
            ...state,
                items : action.payload.filter(item => item.category === "jewelery"),
                clotheType : action.type
        }
    }else if(action.type === 'SORT_BY'){
        return {
            ...state,
            items : action.payload
        }
    }else if(action.type === 'SET_POPUP_ITEM'){
        return {
            ...state,
            infoPopupItem : action.payload
        }
    }
    return state;
}


export default clothes;