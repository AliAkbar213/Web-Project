import useFetch from "./useFetch";

function Products() {

    const {data, loading, error} = useFetch();
    
    return (
        <div className="container">
            <h2 className="title">products</h2>
            {error && <div className="error">{error}</div>}
            {loading && <div className="loading">Loading...</div>}
            {data.map((item) => (
            <div className="item" key={item.id}>
                <h3 className='name'> {item.name} </h3>
                <p className='category'> {item.category} </p>
                <p className='price'> {item.price} </p>
            </div>
            ))}
        </div>
    )
}

export default Products