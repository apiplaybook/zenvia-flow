import { Request, Response } from 'express'
import { SearchPromotionsUseCase } from './SearchPromotionsUseCase'

export class SearchPromotionsController {
	async handle(request: Request, response: Response): Promise<Response> {
		// Armazena o parâmetro de consulta CATEGORIA em uma variável
		const { categoria } = request.query

		// Verificação
		if (!categoria) {
			return response
				.status(400)
				.json({ erro: 'Parâmetro de consulta categoria é obrigatório' })
		}

		try {
			// Inicialização da classe SearchPromotionsUseCase
			const searchPromotionsUseCase = new SearchPromotionsUseCase()

			// Chamada à função execute para a busca das informações e criação da mensagem
			const message = await searchPromotionsUseCase.execute(categoria.toString())

			// Retorno da mensagem
			return response.status(200).json({ mensagem: message })
		} catch (err) {
			// Em caso de erro retorna o status 400 com uma mensagem de erro
			return response.status(400).json({
				message: err.message || 'Unexpected Error.',
			})
		}
	}
}
