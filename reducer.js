const iniitialState = {
    counter : 1
};
function reducer(state = iniitialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            };
        default:
            return state;
    }
}