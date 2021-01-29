import { PromocaoRepositories } from '../../repositories/implementations/PromocaoRepository'

export class SearchPromotionsUseCase {
	async execute(categoryName: string) {
		try {
			// Inicialização do repositório
			const promocaoRepositories = new PromocaoRepositories()

			// Chamada findByCategory do repositório para buscar as promoções de acordo com a categoria
			const promocoes = await promocaoRepositories.findByCategory(categoryName)

			// Com as informações retornadas, prepara as informações para serem transformadas na mensagem a ser enviada
			const message = promocoes.map((promocao) => {
				return `\n${
					promocao.produto.nome
				}:\n De R$${promocao.produto.valor
					.toString()
					.replace(/[./s]/g, ',')}\n Por: R$${promocao.valor
					.toString()
					.replace(/[./s]/g, ',')}\n`
			})

			// Retorna a mensagem
			return `Estas são as promoções da categoria ${categoryName}:\n${message.join()}\n Pesquise o nome do produto na nossa barra de busca do site para encontrar a página com a promoção.`
		} catch (error) {
			console.log(error)
		}
	}
}
