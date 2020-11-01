import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://dummyapi.io/data/api/';
const APP_ID = '{5f9ca8cf59a9a6d614b63dea}';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then(({ data }) => setData(data))
            .catch(console.error)
            .finally(() => setLoading(false));
            console.log(data);
    }, []);

//     return (
//         <div>
//            {loading && "Loading..."}
//            {JSON.stringify(data)}
//         </div>
//     );
};

export { data };