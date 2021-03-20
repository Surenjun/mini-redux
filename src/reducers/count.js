let initialState = {
    count: 0
}

export default function (state, action) {
    if(!state){
        state = initialState
    }
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1,
            };
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1,
            };
        }
        default:
            return state;
    }


}