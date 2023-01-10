import axios from "axios";

const api = axios.create({ 
    baseURL: 'https://api.zoom.com.br/zoomapi/search/query/offers?q='
});

export default api;