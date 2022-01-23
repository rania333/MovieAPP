
export function favMovie (data) {
    return {
        type: 'ADD_TO_FAV',
        payload: data
    }
}

export function removeMovie (data) {
    return {
        type: 'REMOVE-FROM_FAV',
        payload: data
    }
}



