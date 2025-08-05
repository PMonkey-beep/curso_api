import { conection } from "./conection.js"

export async function listarlivros() {

    const comando = `
        SELECT *
        FROM livros
        `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserirlivros(novolivros){
    const comando = `
        INSERT INTO livros (titulo, autor, genero, editora, preco, ano_publicacao)
            values (?, ?, ?, ?, ?, ?);       
    `;

    const [Info] = await conection.query(comando, [
        novolivros.titulo,
        novolivros.autor,
        novolivros.genero,
        novolivros.editora,
        novolivros.preco,
        novolivros.ano_publicacao
    ]);

    return Info.insertId;
}


    
