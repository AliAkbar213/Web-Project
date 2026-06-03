import { useState, useEffect } from "react";

function useFetch(){

    const [data , setData] = useState([{}]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        fetch("/data").then(
            (res) => {
                if (!res.ok){
                    setError("could not fetch data")
                }
                return res.json();
            }
        ).then(
            (data) => {
                setData(data)
                setLoading(false);
            }
        ).catch(err => {
            setError(err)
            }                
        )
    },[])

    return {data, loading, error}

}

export default useFetch