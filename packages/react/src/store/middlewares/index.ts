import { thunk } from 'redux-thunk';

import apiMiddleware from './apiMiddleware';
import logger from './loggerMiddleware';

const middlewares = [thunk, apiMiddleware];

// Just avoids Property 'NODE_ENV' comes from an index signature, so it must be accessed with ['NODE_ENV'].
// @ts-ignore
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  middlewares.push(logger);
}

export default middlewares;
