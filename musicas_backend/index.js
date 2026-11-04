app.post("/cadastrar", (request, response) => {
    const { titulo, artista, genero, ano, duracao } = request.body;
    const comandoInsert = "INSERT INTO musicas_seunome (titulo, artista, genero, ano, duracao) VALUES (?, ?, ?, ?, ?)";

    sql.query(comandoInsert, [titulo, artista, genero, ano, duracao], (error) => {
        if (error) {
            console.log(error);
            return;
        }

        response.status(201).json({
            mensagem: "Música cadastrada com sucesso!"
        });
    });
});