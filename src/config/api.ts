import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL: Config.BASE_URL,
  headers: {'Content-Type': 'application/json'},
});
