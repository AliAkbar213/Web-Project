import { useEffect, useState } from "react";
import useFetch from "./useFetch";

function HomePage(){

    const {data, loading, error} = useFetch();

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