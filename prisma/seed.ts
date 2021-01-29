import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
	// Inserção das categorias
	await prisma.categoria.create({	data: { id: 1, nome: 'calças' }})
	await prisma.categoria.create({	data: { id: 2, nome: 'camisas' }})
	await prisma.categoria.create({	data: { id: 3, nome: 'sapatos' }})
	console.log('Categorias criadas.')
	
	// Inserção dos produtos
	await prisma.produto.create({data: { id: 1, nome: 'Calça Modelo 1', categoriaId: 1, valor: 39.99 }})
	await prisma.produto.create({data: { id: 2, nome: 'Calça Modelo 2', categoriaId: 1, valor: 29.99 }})
	await prisma.produto.create({data: { id: 3, nome: 'Calça Modelo 3', categoriaId: 1, valor: 47.99 }})
	await prisma.produto.create({data: { id: 4, nome: 'Calça Modelo 4', categoriaId: 1, valor: 68.89 }})
	await prisma.produto.create({data: { id: 5, nome: 'Camisa Modelo 1', categoriaId: 2, valor: 39.99	}})
	await prisma.produto.create({data: { id: 6, nome: 'Camisa Modelo 2', categoriaId: 2, valor: 29.99	}})
	await prisma.produto.create({data: { id: 7, nome: 'Camisa Modelo 3', categoriaId: 2, valor: 47.99	}})
	await prisma.produto.create({data: { id: 8, nome: 'Camisa Modelo 4', categoriaId: 2, valor: 68.89	}})
	await prisma.produto.create({data: { id: 9, nome: 'Sapato Modelo 1', categoriaId: 3, valor: 85.99	}})
	await prisma.produto.create({data: { id: 10, nome: 'Sapato Modelo 2', categoriaId: 3, valor: 95.29	}})
	await prisma.produto.create({data: { id: 11, nome: 'Sapato Modelo 3', categoriaId: 3, valor: 157.79	}})
	await prisma.produto.create({data: { id: 12, nome: 'Sapato Modelo 4', categoriaId: 3, valor: 240.99	}})
	console.log('Produtos criados.')
	
	// Inserção das promoções
	await prisma.promocao.create({data:{ id: 1,	produtoId: 1,	valor: 29.99 }})
	await prisma.promocao.create({data:{ id: 2,	produtoId: 2,	valor: 18.78 }})
	await prisma.promocao.create({data:{ id: 3,	produtoId: 4,	valor: 48.89 }})
	await prisma.promocao.create({data:{ id: 4,	produtoId: 5,	valor: 31.19 }})
	await prisma.promocao.create({data:{ id: 5,	produtoId: 8,	valor: 47.49 }})
	await prisma.promocao.create({data:{ id: 6,	produtoId: 11,	valor: 121.44 }})
	await prisma.promocao.create({data:{ id: 7,	produtoId: 12,	valor: 198.8 }})
	console.log('Promoções criadas.')
}

main().catch((e) => console.error(e))
