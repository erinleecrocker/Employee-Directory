import axios from "axios";

const BASE_URL = 'https://dummyapi.io/data/api/';
const APP_ID = '{5f9ca8cf59a9a6d614b63dea}';

export default {
    search: function () {
        return axios.get(
          "https://randomuser.me/api/?inc=picture,name,phone,email,dob&nat=US&results=20"
        );
    },
};
