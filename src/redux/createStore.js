export default function createStore(
    reducers,
    initialState,
    rewriteCreateStoreFunc
) {
    if(rewriteCreateStoreFunc){
        const newCreateStore = rewriteCreateStoreFunc(createStore);
        return newCreateStore(reducers, initialState);
    }

    let state = initialState;
    let listeners = [];

    const subscribe = (listener) => {
        listeners.push(listener)
    }

    const getState = () => {
        return state
    }

    const dispatch = (action) => {
        state = reducers(state, action);
        for (let i = 0; i < listeners.length; i++) {
            const listener = listeners[i];
            listener();
        }
    }

    //对所有的状态进行一步初始化
     dispatch({ type: Symbol() });

    return {
        subscribe,
        getState,
        dispatch
    }

}