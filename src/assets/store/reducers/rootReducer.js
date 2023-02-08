
const initState = {
    users: [
        { id: 1, name: 'Test 01' },
        { id: 2, name: 'Test 02' }
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;