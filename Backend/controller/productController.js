const pool = require("../data/dbConnection")

const GetAllProducts = async (req, res) => {
    query = `SELECT products.id, products.name, price, brands.name as brand, created_at, image_path
            FROM products JOIN brands ON products.brand_id = brands.id`

    if (req.query.q) {
        query += ` WHERE products.name LIKE "%${req.query.q}%"`
    }

    const page = parseInt(req.query.page) || 1
    query += ` ORDER BY price`
    query += ` LIMIT 15 OFFSET ${15 * (page - 1)}`
    console.log(query);

    try {
        const [rows] = await pool.execute(query);
        res.json(rows);

    } catch (err) {
        res.json({ "err": err.message })
    }
}


const GetProductById = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT products.id, products.name, description, price, stock_quantity, categories.name as category, brands.name as brand, created_at
            FROM products JOIN categories ON products.category_id = categories.id
            JOIN brands ON products.brand_id = brands.id WHERE products.id = ?`
    try {
        const [rows] = await pool.execute(query, [id])
        if (rows.length == 0) res.json({ "err": "no product found" })
        res.send(rows[0]);
    } catch (err) {
        res.json({ "err": err.message })
    }
}

const GetCategories = async (req, res) => {
    query = `SELECT * FROM categories`

    // if (req.query.q){
    //     query += ` WHERE products.name LIKE "%${req.query.q}%"`
    // }

    console.log(query);

    try {
        const [rows] = await pool.execute(query);
        res.json(rows);

    } catch (err) {
        res.json({ "err": err.message })
    }
}

const GetProductByCategory = async (req, res) => {
    query = `SELECT products.id, products.name, price, brands.name as brand, created_at
            FROM products JOIN brands ON products.brand_id = brands.id JOIN categories ON products.category_id = categories.id`

    // if (req.query.q){
    //     query += ` WHERE products.name LIKE "%${req.query.q}%"`
    // }

    query += ` WHERE categories.name LIKE "%${req.params.name}%"`
    const page = parseInt(req.query.page) || 1
    query += ` ORDER BY price`
    query += ` LIMIT 15 OFFSET ${15 * (page - 1)}`
    console.log(query);

    try {
        const [rows] = await pool.execute(query);
        res.json(rows);

    } catch (err) {
        res.json({ "err": err.message })
    }
}


// const AddProduct = async(req, res) => {
//     const {item, category, price} = req.body
//     try {
//         const [row] = await pool.execute("INSERT INTO products (item, category, price) VALUES ( ?, ?, ?)",
//              [item, category, price])
//         res.status(201).json({
//             id: row.insertId,
//             item,
//             category,
//             price
//         });
//     } catch (err) {
//         res.json({"err" : err.message})
//     }
// }
// 
// const UpdateProduct = async (req, res) => {
//     const id = req.params.id
//     const keys = []
//     const values = []
//     for (key in req.body){
//         keys.push(`${key} = ?`);
//         values.push(req.body[key]);
//     }
//     const update = keys.join(',')

//     try {
//         const [row] = await pool.execute(`UPDATE products SET ${update} WHERE id = ${id}`,values)
//         res.json(row);
//     } catch (err) {
//         res.json({"err" : err.message})
//     }
// }

// const DeleteProduct = async (req, res) => {
//     const id = req.params.id

//     try {
//         const [row] = await pool.execute(`DELETE FROM products WHERE id = ${id}`)
//         res.json(row);
//     } catch (err) {
//         res.json({"err" : err.message})
//     }
// }

module.exports = {
    GetAllProducts,
    GetProductById,
    GetCategories,
    GetProductByCategory
}