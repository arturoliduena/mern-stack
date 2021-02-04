import { RootState } from '../store/index';
/*
 * Selector. The query depends by the state shape
 */
export const getToken = (state: RootState) => state.auth.token;