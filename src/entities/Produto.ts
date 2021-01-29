import { Categoria } from './Categoria'

export interface Produto {
	id: number
	nome: string
	categoria: Categoria
	categoriaId: string
	valor: number
}
