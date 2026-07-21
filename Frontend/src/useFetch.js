import { useState, useEffect } from "react";

function useFetch(url) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(url);


    useEffect(() => {
        fetch(url, { credentials: "include" }).then(
            (res) => {
                if (!res.ok) {
                    setError("could not fetch data")
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false)
            })
    }, [url])

    console.log(data);
    console.log(url);




    return { data, loading, error }

}

export default useFetch