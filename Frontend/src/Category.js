import useFetch from "./useFetch"
import "./styles/Category.css"
import { Link } from "react-router-dom";

function Category(){
    const url = process.env.REACT_APP_API_URL || "http://localhost:5000"
    const {data, loading, error} = useFetch(`${url}/api/products/category`);

    return(
        <div className="c-container">
            <h2 className="c-heading">Categories</h2>
            {error && <div className="c-error">{error}</div>}
            {loading && <div className="c-loading">Loading...</div>}
            <div className="c-categories" key={data.id}>
                {data.map(category => (
                    <Link to={`/products/category/${category.name}`} key={category.id} className="c-link">
                        <div className="c-category-container" >
                            <p className="c-name">{category.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Category