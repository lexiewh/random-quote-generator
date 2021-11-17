import { GET_QUOTES } from "../constants/action-types"

const initialState = {
    quotes: [],
    remoteQuotes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUOTES:
            return {
                ...state,
                remoteQuotes: state.remoteQuotes.concat(action.payload)
            }
        default:
            return state
    }
}

export default rootReducer