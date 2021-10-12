const createAnalytics = (): object => {
    const initialState: { counter: number, isDestroyed: boolean } = {
        counter: 0,
        isDestroyed: false,
    };
    let state = {
        ...initialState
    }

    const listener = () => state.counter++;
    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            state.isDestroyed = true;
        },
        getClicks() {
            if (state.isDestroyed) {
                return 'Analytics is destroyed';
            }
            return state.counter;
        },
        reset() {
            state = initialState;
            document.addEventListener('click', listener);
        }
    }
};

window['analytics'] = createAnalytics();