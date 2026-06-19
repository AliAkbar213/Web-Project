import useFetch from "./useFetch";

function Products() {

    const {data, loading, error} = useFetch("/products");
    
    return (
        <div className="container">
            <h2 className="title">products</h2>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            {data.map((item) => (
            <div className="item" key={item.id}>
                <h3 className='name'> {item.item} </h3>
                <h5 className='category'> {item.category} </h5>
            </div>
            ))}
        </div>
    )
}

export default Products