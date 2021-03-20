//初始化合并reducer
export default function combineReducers(reducers) {

    const reducerKeys = Object.keys(reducers);
    return function combination(state = {}, action) {
        const combineState = {}
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            // 拿到dispatch前的对应的state
            const previousState = state[key];
            const nextState = reducer(previousState, action);
            // dispatch后的state 并更新state
            combineState[key] = nextState
        }
        return combineState
    }
}