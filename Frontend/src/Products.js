import useFetch from "./useFetch";
import { Link, useParams, useSearchParams } from "react-router-dom";
import "./styles/Products.css"
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Products() {

  const [searchParams, setSearchParams] = useSearchParams()
  const { category } = useParams()

  const query = searchParams.get("q") || ""
  const page = parseInt(searchParams.get("page")) || 1
  let url = process.env.REACT_APP_API_URL || "http://localhost:5000"
  if (category) {
    url += `/api/products/category/${category}?page=${page}`
  } else {
    url += `/api/products?q=${query}&page=${page}`
  }
  const { data, loading, error } = useFetch(url);

  const { IncreaseCart, decreaseCart, itemInCart, cart } = useContext(CartContext)
  const changePage = (newPage) => {
    setSearchParams({ page: newPage });
  }

  return (
    <div className="products-container">
      <h1 className="products-title">{query && `Showing results for: ${query}`}</h1>
      {error && <div className="products-error">{error}</div>}
      {loading && <div className="products-loading">Loading...</div>}

      <div className="products-grid">
        {data.map((item) => (
          <div className="products-card" key={item.id} >
            <Link to={`/products/${item.id}`} className="products-link">
              <div className="products-image">
                {item.image_path && <img src={`http://localhost:5000/images/${item.image_path}`} alt={item.name} />}
              </div>
              <p className="products-name">{item.name}</p>
              <p className="products-brand">{item.brand}</p>
              <p className="products-price">{item.price}</p>
            </Link>
            {!(itemInCart(item.id)) && <button onClick={() => { IncreaseCart(item.id, item.name, item.price);console.log(cart);}} className="products-add-btn">Add To Cart</button>}
            {itemInCart(item.id) &&
              <div className="products-buttons">
                <button onClick={() => { IncreaseCart(item.id);console.log(cart); }} className="products-inc-btn">+</button>
                <p className="products-quantity">In Cart: {cart.find((cartItem) => cartItem.id === item.id).quantity}</p>
                <button onClick={() => { decreaseCart(item.id) }} className="products-dec-btn">-</button>
              </div>}
          </div>
        ))}
      </div>
      <div className="products-page-btn">
        {page !== 1 && <button onClick={() => changePage(page - 1)} className="products-prev-page">Previous Page</button>}
        <button onClick={() => changePage(page + 1)} className="products-next-page">Next Page</button>
      </div>
    </div>
  )
}

export default Products