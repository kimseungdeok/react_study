function addTodo(data) {
    return {
        type: 'ADD_TODO',
        data
    };
}

// 화살표 함수로도 만들 수 있습니다.
const changeInput = text => ({
    type: 'CHANGE_INPUT',
    text
});