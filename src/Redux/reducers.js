let initialState = {
    language: 'vi',
    number: [],
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "changelanguage":
            return { ...state, language: action.language }
        case "addnumber":
            return { ...state, number: [...state.number, action.number] }
        default:
            return state;
    }
}

export default Reducer;