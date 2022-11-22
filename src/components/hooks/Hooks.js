import { useContext } from "react"
import { contexto } from "../ContextProvider"

export const useContextProvider = () =>{
	return useContext(contexto)
}