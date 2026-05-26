import { useEffect, useState } from "react";

function HomePage(){

        const [data , setData] = useState([{}]);

        useEffect(() => {
            fetch("/data").then(
            (res) => res.json()
            ).then(
                (data) => setData(data)
            )
        },[])
        


    return (
        <div className="home">
            <h2>Home Page</h2>
            {data.map((item) => (
                <p key={item.id}>
                    {item.name}
                </p>
            ))}
        </div>
    );
}

export default HomePage