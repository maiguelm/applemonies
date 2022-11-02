import productsArray from "./productsArray.json"

let products = []

products = productsArray.map((item) => {
	return item
})


export const getProducts = () => {
	let arrayPetition = new Promise((res) => {
		setTimeout(() => {
			res(products)
			console.log(productsArray)
		}, 1500)
	})
	return arrayPetition
}

export const getProductByCategory = (categoria) => {

	let arrayPetition = new Promise((res) => {
		setTimeout(() => {
			res(products.filter((item) => item.categoria == categoria))
		}, 1500)
	})
	console.log(arrayPetition)
	return arrayPetition
}

export const getProductsById = (productId) => {
    let arrayPetition = new Promise((res) => {
        setTimeout(() => {
            res(products.find(item => item.id == productId))
        }, 500)
    })
    return arrayPetition
}

export default {
    getProducts,
    getProductByCategory,
	getProductsById
}