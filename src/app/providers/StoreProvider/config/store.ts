import { configureStore } from '@reduxjs/toolkit';
import { StateShema } from './StateShema';

export function createReduxStore(initialState?: StateShema) {
    return configureStore<StateShema>({
        reducer: {},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
