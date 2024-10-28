import axios from "axios";

const apiClient=axios.create({
    baseURL:'https://active-jobs-db.p.rapidapi.com',
    headers:{
        'x-rapidapi-key': '83f4b492e6mshfb06c8636d5ffe4p189fd1jsn4c189d889930',
        'x-rapidapi-host':'active-jobs-db.p.rapidapi.com'
    }
})

export const getApiData = async (url) => {
    try {
        const response = await apiClient.get(url);
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 2xx
            console.error('Error fetching data:', error.response.data);
        } else if (error.request) {
            // Request was made but no response was received
            console.error('No response received:', error.request);
        } else {
            // Something happened in setting up the request
            console.error('Error setting up request:', error.message);
        }
    }
};
