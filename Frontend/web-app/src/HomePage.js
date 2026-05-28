import { useEffect, useState } from "react";

function HomePage(){

        const [data , setData] = useState([{}]);
        const [loading , setLoading] = useState(true);
        const [error , setError] = useState(null);



        useEffect(() => {
            fetch("/data").then(
                (res) => {
                    if (!res.ok){
                        setError("could not fetch data")
                    }
                    res.json();
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
        


    return (
        <div className="home">
            <h2>Home Page</h2>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {data.map((item) => (
                <p key={item.id}>
                    {item.name}
                </p>
            ))}
        </div>
    );
}

export default HomePage