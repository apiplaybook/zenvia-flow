import { Produto } from './Produto'

export interface Promocao {
	id: number
	produto: Produto
	produtoId: number
	valor: number
}
