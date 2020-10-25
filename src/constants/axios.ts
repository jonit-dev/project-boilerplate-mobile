import axios from 'axios';

import { appEnv } from './env';

export const apiAxios = axios.create({
  baseURL: appEnv.apiUrl,
});
