import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Livro } from "../entity/Livro";

export class LivroController {
    // Pegamos o repositório do Livro (a ferramenta que fala com o banco)
    private livroRepository = AppDataSource.getRepository(Livro);

    // 1. Criar (POST)
    async create(req: Request, res: Response) {
        const { titulo, autor, isbn, anoPublicacao, disponivel } = req.body;

        // Lógica de validação simples (Requisito: Controller com lógica)
        if (!titulo || !autor) {
            return res.status(400).json({ message: "Título e Autor são obrigatórios" });
        }

        const livro = this.livroRepository.create({
            titulo, autor, isbn, anoPublicacao, disponivel
        });

        await this.livroRepository.save(livro);
        return res.status(201).json(livro);
    }

    // 2. Ler Todos (GET)
    async getAll(req: Request, res: Response) {
        const livros = await this.livroRepository.find();
        return res.json(livros);
    }

    // 3. Ler por ID (GET)
    async getOne(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        
        const livro = await this.livroRepository.findOneBy({ id });
        
        if (!livro) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }
        return res.json(livro);
    }

    // 4. Atualizar (PUT)
    async update(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const livro = await this.livroRepository.findOneBy({ id });

        if (!livro) {
            return res.status(404).json({ message: "Livro não encontrado" });
        }

        // Atualiza os campos com o que veio na requisição
        this.livroRepository.merge(livro, req.body);
        const results = await this.livroRepository.save(livro);
        return res.json(results);
    }

    // 5. Excluir (DELETE)
    async delete(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        const results = await this.livroRepository.delete(id);
        
        if (results.affected === 0) {
             return res.status(404).json({ message: "Livro não encontrado" });
        }

        return res.status(204).send(); // 204 = Sem conteúdo (sucesso)
    }
}