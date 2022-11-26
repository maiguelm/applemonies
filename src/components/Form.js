import { Button, FormGroup } from '@mui/material'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { dataBase } from '../store/Firebase'
import { useCarrito } from './ContextProvider'

export const Form = () => {

	const { register, formState: { errors }, handleSubmit, getValues } = useForm();
	const { productos, total } = useCarrito()
	const [nroOrden, setNroOrden] = useState(false)
	const [id, setId] = useState("")


	const onSubmit = (data, e) => {

		function getRandom() {
			return Math.trunc(Math.random() * 10000) * 100;
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
		e.target.reset();
	}

	return (
		<FormGroup>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input {...register("nombre", { required: true })}
						placeholder='Nombre' />
					{errors.nombre?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
				</div>
				<div>
					<input {...register("apellido", { required: true })}
						placeholder='Apellido' />
					{errors.apellido?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
				</div>
				<div>
					<input {...register("mail", {
						required: true,
						pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
					})}
						placeholder='Correo Electronico' />
					{errors.mail?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
					{errors.mail?.type === "pattern" && <p>FORMATO INCORRECTO</p>}
				</div>
				<div>
					<input {...register("confemail", {
						required: true,
						pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
						validate: (value) => value === getValues("mail")
					})}
						placeholder='Confirme su Correo Electronico' />
					{errors.confemail?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
					{errors.confemail?.type === "pattern" && <p>FORMATO INCORRECTO</p>}
					{errors.confemail?.type === "validate" && <p>LOS CORREOS NO COINCIDEN</p>}
				</div>
				<div>
					<input {...register("telefono", {
						required: true,
						maxLength: 11,
						minLength: 8,
						valueAsNumber: true
					})}
						placeholder='Celular' />
					{errors.telefono?.type === "required" && <p>ESTE CAMPO ES REQUERIDO</p>}
					{errors.telefono?.type === "maxLength" && <p>VERIFIQUE EL NUMERO INGRESADO</p>}
					{errors.telefono?.type === "minLength" && <p>VERIFIQUE EL NUMERO INGRESADO</p>}
					{errors.telefono === "valueAsNumber" && <p>VERIFIQUE EL NUMERO INGRESADO</p>}
				</div>

				<Button className="counter__buttons"><input type="submit" /></Button>

			</form>

			{id ? <h1>Orden generada con exito, su compra fue registrada con el número: {nroOrden}</h1> : null}


		</FormGroup>
	)
}