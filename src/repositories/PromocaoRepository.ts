import { Promocao } from './../entities/Promocao'

export interface IPromocaoRepository {
	findByCategory(category: string): Promise<Promocao[]>
}
