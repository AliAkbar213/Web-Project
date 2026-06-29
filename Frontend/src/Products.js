import useFetch from "./useFetch";

function Products() {

    const {data, loading, error} = useFetch("/api/products");
    
    return (
        <div className="container">
            <h2 className="title">products</h2>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            {data.map((item) => (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <h5>{item.brand}</h5>
                <h4>{item.price}</h4>
            </div>
            ))}
        </div>
    )
}

export default Products