import { Promocao } from '../../entities/Promocao'
import { PrismaClient } from '@prisma/client'
import { IPromocaoRepository } from '../PromocaoRepository'

const prisma = new PrismaClient()

export class PromocaoRepositories implements IPromocaoRepository {
	async findByCategory(category: string): Promise<Promocao[]> {
		try {
			const produtos = await prisma.promocao.findMany({
				where: { produto: { categoria: { nome: category } } },
				select: {
					produto: true,
					valor: true,
				},
			})
			// @ts-ignore
			return produtos
		} catch (error) {
			console.log('error', error)
			return []
		}
	}
}
