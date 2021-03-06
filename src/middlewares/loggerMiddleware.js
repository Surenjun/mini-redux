const loggerMiddleware = (store) => (next) => (action) => {
    console.log('[action]', action,'---->');
    console.log('[before state:]', store.getState());
    next(action);
    console.log('[next state:]', store.getState());
};
export default loggerMiddleware;
