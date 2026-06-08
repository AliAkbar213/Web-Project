import { useState, useEffect } from "react";

function useFetch(url){

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        fetch(url).then(
            (res) => {
                if (!res.ok){
                    setError("could not fetch data")
                }
                return res.json();
            })
            .then((data) => {
                setTimeout(() => {
                    setData(data);
                    setLoading(false);
                }, 2000);
            })
            .catch(err => {
                setError(err);
            })
    },[])

    return {data, loading, error}

}

export default useFetch