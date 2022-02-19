import { useReducer } from "react";

function reducer(state, action) {
    return {
        ...state,
        [action.name] : action.value
    };
}

export default function useInputs(initislForm) {
    const [state, dispatch] = useReducer(reducer, initislForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return [state, onChange];
}