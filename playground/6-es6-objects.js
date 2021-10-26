// object property shorthand

const name = 'Andrew'
const userAge = 27

// if property name is the same as variable name, you can use the shorthand to define it in objects.
const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// object destructuring
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
}

// const label = product.label
// const stock = product.stock

// syntax const {property1: newName, property2, property3 = default} = object
const { label: productLabel, stock, rating = 5 } = product

console.log(productLabel);
console.log(stock);
// if property does not exist, its gonna return undefined but not crash
console.log(rating)


const transaction = (type, { label = 'Apple', stock = 0 } = {}) => {
    console.log(type);
    console.log(label);
    console.log(stock);


}

transaction('order', product)