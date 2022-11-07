import productsArray from "./productsArray.json"

let products = []

products = productsArray.map((item) => {
	return item
})


export const getProducts = () => {
	let arrayPetition = new Promise((res) => {
		setTimeout(() => {
			res(products)
		}, 500)

	})
	return arrayPetition
}

export const getProductByCategory = (categoria) => {

	let arrayPetition = new Promise((res) => {
		setTimeout(() => {
			res(products.filter((item) => item.categoria == categoria))
		}, 1500)
	})
	return arrayPetition
}

export const getProductsById = (id) => {
    let arrayPetition = new Promise((res) => {
        setTimeout(() => {
            res(products.find(item => item.id == id))
        }, 500)
		console.log(products)
    })
    return arrayPetition
}

export default {
    getProducts,
    getProductByCategory,
	getProductsById
}
