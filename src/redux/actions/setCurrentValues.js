export let setCurrentMinValue = (value) => {
    return {
        type : "SET_MIN_VALUE",
        payload : value
    }
}

export let setCurrentMaxValue = (value) => {
    return {
        type : "SET_MAX_VALUE",
        payload : value
    }
}