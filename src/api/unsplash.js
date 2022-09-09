import axios from "axios";

export default axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 1I9hdz-D5Tp562zAj_Q1w2eysh_aSqDSS9SMdwZfF1Y'
    }
});