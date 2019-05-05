import axios from 'axios';

//CREATING INSTANCE OF AXIOS
export default axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});