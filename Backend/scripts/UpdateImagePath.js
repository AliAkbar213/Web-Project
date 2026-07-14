const pool = require("../data/dbConnection");


async function main() {

    const query = `
        SELECT id, name, image_path
        FROM products
    `;
    console.log(query);

    const [rows] = await pool.execute(query);
    console.log(rows);

    for (const product of rows) {

        let id = product.id

        let name = product.name + ''
        name = name.toLowerCase()
        if (!(name.startsWith('xiaomi'))) continue;

        name = name.replace('256gb', '')
        name = name.replace('512gb', '')
        name = name.replace('dawn', '')
        name = name.replace('awesome', '')
        name = name.replace('light', '')
        name = name.replace('sky', '')
        name = name.replace('deep', '')
        name = name.replace('cosmic', '')
        name = name.replace('coral', '')
        name = name.replace('hone', '')
        name = name.replace('max', '')
        name = name.replace('plus', '')
        name = name.replace('galaxy', '')

        console.log(name);

        // let arr = name.split('  ')
        // arr = arr.filter(Boolean)
        // arr[0] = arr[0].replaceAll(' ','')
        // arr[1] = arr[1].trim()
        // let path = arr[0]+'-'+arr[1]
        // path = path + '.jpeg';

        // const q = `UPDATE products SET image_path = '${path}' WHERE (id = '${id}');`

        // console.log(q);
    }

    pool.end()

}

main();