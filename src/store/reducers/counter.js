const initialState = {
    title: '',
    result: 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            state = {
                ...state,
                title: 'increment',
                result: state.result += 1
            }
            break;
        case 'DECREMENT':
            state = {
                ...state,
                title: 'decrement',
                result: state.result -= 1
            }
            break;
    };
    return state;
};

export default counter;
