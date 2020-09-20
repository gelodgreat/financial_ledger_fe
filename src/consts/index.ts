export { APP_ROUTES, MAIN_ROUTES } from './routes';

export const API = {
  URL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  VERSION: process.env.REACT_APP_API_VERSION || 'v1',
};
