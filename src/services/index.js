import axios from 'axios';
import { API } from '../constants/api';


export function getEmployeeApi(apiLink) {
    console.log('entry',apiLink);
  return axios.get(
    apiLink
  );
}