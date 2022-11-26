import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { toast } from "react-toastify"
import { dataBase } from "./Firebase"


const consultaDB = collection(dataBase, "products")

export const getProducts = () => {

	const pedidoDB = getDocs(consultaDB)
	pedidoDB
		.then((res) => {
			res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
		
		})
		.catch((e) => {
			toast.error(e)
		})
	return pedidoDB

}

export const getProductByCategory = (categoria) => {

	const customQuery = query(consultaDB, where("categoria", "==", categoria))
	const pedidoDB = getDocs(customQuery)

	pedidoDB
		.then((res) => {
		res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
	})
		.catch((e) => {
			toast.error(e)
		})

	return pedidoDB
}

export const getProductById = (id) => {
	const consProd = doc(consultaDB, id)
	const pedidoDB = getDoc(consProd)
   
	pedidoDB
      .then((res) => {
		  res.data()
      })
      .catch((e) => {
        toast.error(e)
      })

	  return pedidoDB
}


