import axios from "axios";

const getTwits = () => {
    return axios.get(`${API_URL}/twits/`)   
};

export default {
    getTwits
};
