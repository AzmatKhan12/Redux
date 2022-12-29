import {configureStore} from '@reduxjs/toolkit';
import appReducer from './appReducer';
import logger from 'redux-logger';

const appStore = configureStore({
    reducer: {
      appReducer
    },
    middleware: [logger]
})

export default appStore;
