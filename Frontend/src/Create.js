import { useState } from "react";

function Create() {
    const [item, setItem] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')

    const [isPending, setIsPending] = useState(false)
    const [productAdded, setProductAdded] = useState(false)

    const HandleSubmit = (e) => {
        e.preventDefault()
        setIsPending(true)
        const product = { item, category, price: Number(price) }

        fetch('/products', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product)
        }).then(() => {
            setTimeout(() => {
                console.log("product added")
                setIsPending(false)
                setProductAdded(true)
                setItem('')
                setCategory('')
                setPrice('')
            }, 2000);
        })
    }


    return (
        <div className="create-container">
            {productAdded && <h3 className="success">Product has been added successfully</h3>}
            <h2>Add a new Product</h2>
            <form onSubmit={HandleSubmit}>
                <label>Item Name: </label>
                <input type="text" required value={item} onChange={(e) => setItem(e.target.value)} />

                <label>Category : </label>
                <select required value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled>Select a category</option>
                    <option value="dairy">dairy</option>
                    <option value="fruits/vegs">fruits/vegs</option>
                    <option value="snacks">snacks</option>
                </select>

                <label>Price: </label>
                <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} />

                {!isPending && <button>Add Product</button>}
                {isPending && <button disabled>Adding...</button>}
            </form>
        </div>
    );
}

export default Create