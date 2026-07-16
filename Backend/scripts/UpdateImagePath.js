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

        // name = name.replace('256gb', '')
        // name = name.replace('512gb', '')
        // name = name.replace('dawn', '')
        // name = name.replace('awesome', '')
        // name = name.replace('light', '')
        // name = name.replace('sky', '')
        // name = name.replace('deep', '')
        // name = name.replace('cosmic', '')
        // name = name.replace('coral', '')
        // name = name.replace('hone', '')
        // name = name.replace('max', '')
        // name = name.replace('plus', '')
        // name = name.replace('galaxy', '')
        name = name.replace('redmi', '')
        name = name.replace('8gb/256gb', '')
        name = name.replace('12gb/512gb', '')
        name = name.replace('4gb/128gb', '')
        name = name.replace('5g', '')
        name = name.replace('+', 'plus')

        // console.log(name);

        // let arr = name.split(' ')
        // arr = arr.filter(Boolean)
        // console.log(arr);
        
        // arr[0] = arr[0].replaceAll(' ','')
        // arr[1] = arr[1].trim()

        // let path = ''

        // if(arr.length === 4){
        //     path = arr[0] + arr[1] + arr[2] + '-' + arr[3]
        //     console.log(path);
        // }else if (arr.length === 3){
        //     path = arr[0] + arr[1] + '-' + arr[2]
        // }else if (arr.length === 5){
        //     path = arr[0] + arr[1] + arr[2] + arr[3] + '-' + arr[4]
        // } 

        // // let path = 
        // path = path + '.jpeg';



        // 1. Split and clean empty spaces
let arr = name.split(' ').filter(Boolean);

let path = '';

if (arr.length > 1) {
    // Join all words except the last one, then append '-' and the last word
    const mainPart = arr.slice(0, -1).join('');
    const lastWord = arr[arr.length - 1];
    path = `${mainPart}-${lastWord}.jpeg`;
} else if (arr.length === 1) {
    // Fallback if there is only one word in the name
    path = `${arr[0]}.jpeg`;
} else {
    // Fallback if the name was completely empty
    path = 'default.jpeg'; 
}

// console.log(path);
        const q = `UPDATE products SET image_path = '${path}' WHERE (id = '${id}');`
        console.log(q);

    }

    pool.end()

}

main();