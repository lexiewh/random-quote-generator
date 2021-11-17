import { GET_QUOTES } from "../constants/action-types";

// export const getQuotes = () => {
//     return function(dispatch) {
//         return fetch("https://quotable.io/quotes")
//             .then(res => res.json())
//             .then(json =>
//                 dispatch({ type: GET_QUOTES, payload: json }))
//     }
// }

export function getQuotes() {
    return async function (dispatch) {
        const data = await fetch("https://quotable.io/quotes");
        const quotes = await data.json()
        return dispatch({ type: GET_QUOTES, payload: quotes.results})
    };
}