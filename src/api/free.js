import axios from 'axios';
const config = {
  baseURL: '/api/v1'
};
export default axios.create(config);
// for non authorized requests