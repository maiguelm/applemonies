import { collection, getDocs, query, where } from "firebase/firestore"
import { dataBase } from "./Firebase"
import productsArray from "../no-utilizados/productsArray.json"



export let products = []

// products = productsArray.map((item) => {
// 	return item
// })


const consultaDB = collection(dataBase, "products")
console.log(consultaDB)

// export const getProducts = () => {
// 	// let arrayPetition = new Promise((res) => {
// 	// 	setTimeout(() => {
// 	// 		res(products)
// 	// 	}, 500)

// 	// })
// 	// return arrayPetition


// 	     const pedidoDB = getDocs(consultaDB)
// 		pedidoDB
// 		  .then((res) => {
// 			const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
// 			products.push(prods)
// 			return products
// 		  })
// 		  .catch((e) => {
// 			console.log(e)
// 		  }) 

// }

export const getProductByCategory = (categoria) => {

	// const customQuery = query(consultaDB, where("categoria", "==", categoria))

	// const pedidoDB = getDocs(customQuery)

	// pedidoDB.then((res)=>{
	// 	const prods = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
	// 	products.push(prods)
	// 	console.log(products)
	//   })
	//   .catch((e) => {
	// 	console.log(e)
	//   }) 

	// let arrayPetition = new Promise((res) => {
	// 	setTimeout(() => {
	// 		res(products.filter((item) => item.categoria == categoria))
	// 	}, 1500)
	// })
	// return arrayPetition
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
	// getProducts,
	getProductByCategory,
	getProductsById
}
