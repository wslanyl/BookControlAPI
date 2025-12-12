import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import { LivroController } from "./controller/LivroController";

const app = express();
app.use(express.json()); // Para o servidor entender JSON

const controller = new LivroController();

// Inicializa o banco de dados
AppDataSource.initialize().then(async () => {
    console.log("Banco de dados conectado!");

    // --- Definição das Rotas (Endpoints CRUD) ---
    
    // Criar
    app.post("/api/livros", (req, res) => controller.create(req, res));
    
    // Ler Todos
    app.get("/api/livros", (req, res) => controller.getAll(req, res));
    
    // Ler por ID
    app.get("/api/livros/:id", (req, res) => controller.getOne(req, res));
    
    // Atualizar
    app.put("/api/livros/:id", (req, res) => controller.update(req, res));
    
    // Excluir
    app.delete("/api/livros/:id", (req, res) => controller.delete(req, res));

    // Iniciar o servidor
    app.listen(3000, () => {
        console.log("Servidor rodando na porta 3000");
    });

}).catch(error => console.log(error));