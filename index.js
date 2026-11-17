const express = require('express');
const app = express();
const port = 3000;

// Permitir que o Express leia arquivos JSON
app.use(express.json());

// Servir os arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Lista temporária de tarefas (nosso "banco de dados" em memória)
let tasks = [];

// Rota para buscar todas as tarefas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// Rota para adicionar uma nova tarefa
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        text: req.body.text
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Rota para remover uma tarefa
app.delete('/api/tasks/:id', (req, res) => {
    const taskId = Number(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'Tarefa removida com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
