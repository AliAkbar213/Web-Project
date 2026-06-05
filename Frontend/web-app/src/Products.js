import useFetch from "./useFetch";

function Products() {

    const {data, loading, error} = useFetch();
    
    return (
        <div>
            <h2>products</h2>
            {error && <div>{error}</div>}
            {loading && <div>Loading...</div>}
            {data.map((item) => (
                <p key={item.id}>
                    {item.name}
                </p>
            ))}
        </div>
    )
}

export default Products