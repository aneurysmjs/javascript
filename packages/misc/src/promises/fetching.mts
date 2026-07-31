import axios from 'axios';

export default function fetching(url: string) {
  return axios.get(url);
}
