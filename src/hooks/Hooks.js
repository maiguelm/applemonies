import { useContext } from "react"
import { contexto } from "../components/ContextProvider"

export const useContextProvider = () => {
	return useContext(contexto)
}