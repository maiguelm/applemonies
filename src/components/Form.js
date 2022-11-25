import { Button } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { dataBase } from '../store/Firebase'
import { useCarrito } from './ContextProvider'

export const Form = () => {

	const { register, formState: { errors }, watch, handleSubmit } = useForm();
	const { productos, total } = useCarrito()
	const [nroOrden, setNroOrden] = useState(false)
	const [id, setId] = useState("")

	const refNombre = useRef()
	const refMail = useRef()
	const refMailDos = useRef()
	const refCel = useRef()

	const validacion = () => {
		watch("mail", "maildos")
		if ("mail" !== "maildos") {
			console.log("mail distintos")
		}
	}
	console.log(productos)

	const onSubmit = (data) => {

		function getRandom() {
			return Math.trunc(Math.random() * 10000);
		}

		const pedido = {
			usuario: {
				nombre: data.nombre,
				telefono: data.telefono,
				mail: data.mail
			},
			products: productos[0],
			total: total[0],
			date: serverTimestamp(),
			nroOrden: getRandom(),
		}

		const comprasCollection = collection(dataBase, "compras")
		const consulta = addDoc(comprasCollection, pedido)

		consulta
			.then((docRef) => {
				setNroOrden(pedido.nroOrden)
				setId(docRef.id)
			})
			.catch((error) => {
				console.log(error)
				console.log("error")
			})
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>Nombre y Apellido</label>
					<input
						type="text"
						{...register("nombre", {
							required: true,
							maxLength: 80
						})}
					/>
					{errors.nombre?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
				</div>
				<div>
					<label>Email</label>
					<input
						type="text"
						{...register("mail", {
							required: true,
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
						})}
					/>
					{errors.mail?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
					{errors.mail?.type === "pattern" && <p>FORMATO INCORRECTO</p>}
				</div>
				<div>
					<label>Confirme su Email</label>
					<input
						type="text"
						{...register("maildos", {
							required: true,
							pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
							validate: validacion,
						})}
					/>
					{errors.maildos?.type === "pattern" && <p>FORMATO INCORRECTO</p>}
					{errors.maildos?.type === validacion() && <p>LOS MAILS NO COINCIDEN!!</p>}
				</div>
				<div>
					<label>Telefono</label>
					<input
						type="tel"
						{...register("telefono", {
							required: true,
							maxLength: 11,
							minLength: 8
						})}
					/>
					{errors.telefono?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
					{errors.telefono?.type === "maxLength" && <p>VERIFIQUE EL NUMERO INGRESADO</p>}
					{errors.telefono?.type === "minLength" && <p>VERIFIQUE EL NUMERO INGRESADO</p>}
				</div>
				<input type="submit" value="Confirmar Compra!" />
			</form>
				{id ? <h1>Orden generada con exito, su compra fue registrada con el número: {nroOrden}</h1> : null}

			<div>
			</div>
		</div>
	)
}
