let initState = {
    info: {
        name: 'surenjun',
        description: 'coll',
    },
};
export default function reducer(state, action) {
    switch (action.type) {
        case 'SET_NAME': {
            return {
                ...state,
                name: action.name,
            };
        }
        case 'SET_DECREMENT': {
            return {
                ...state,
                description: action.description,
            };
        }
        default:
            return state;
    }
}
