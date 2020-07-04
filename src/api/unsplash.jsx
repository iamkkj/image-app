import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID szfgAXgj9fT2ZmDR2SBrep-nVrP81VubTF1Oik-TapE'
    }
});