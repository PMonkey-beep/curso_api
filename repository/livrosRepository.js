import { conection } from './conection.js'


export async function listarlivros() {
    const comando = `
        select *
            from livros
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarlivro(id) {
    const comando = `
        select *
            from livros
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarlivropornome(titulo) {
    const comando = `
        select *
            from livros
            where titulo like ?
    `;

    const [registros] = await conection.query(comando, [`%${titulo}%`]);
    return registros;
}


export async function inserirlivro(novolivro) {
    const comando = `
        insert into livros (titulo, autor, genero, editora, preco, ano_publicacao)
            values (?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novolivro.titulo,
        novolivro.autor,
        novolivro.genero,
        novolivro.editora,
        novolivro.preco,
        novolivro.ano_publicacao
    ]);
    return info.insertId;
}


export async function alterarlivro(id, novosdados) {
    const comando = `
        update livros
            set titulo = ?,
                autor = ?,
                genero = ?,
                editora = ?,
                preco = ?,
                ano_publicacao = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.titulo,
        novosdados.autor,
        novosdados.genero,
        novosdados.editora,
        novosdados.preco,
        novosdados.ano_publicacao,
        id
    ]);
    return info;
}


export async function removerlivro(id) {
    const comando = `
        delete from livros
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}



    
