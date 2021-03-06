
const initialState = {
    users: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, loading: true };
        case 'RECIEVED_USERS':
            return { ...state, users: action.json, loading: false }
        default:
            return state;
    }
};
export default reducer;
