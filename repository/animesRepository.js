import { conection } from './conection.js'


export async function listaranimes() {
    const comando = `
        select *
            from animes
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultaranime(id) {
    const comando = `
        select *
            from animes
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtraranimepornome(nome) {
    const comando = `
        select *
            from animes
            where nome like ?
    `;

    const [registros] = await conection.query(comando, [`%${nome}%`]);
    return registros;
}


export async function inseriranime(novoanime) {
    const comando = `
        insert into animes (nome, genero, episodios, ano_lancamento, estudio, avaliacao)
            values (?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novoanime.nome,
        novoanime.genero,
        novoanime.episodios,
        novoanime.ano_lancamento,
        novoanime.estudio,
        novoanime.avaliacao
    ]);
    return info.insertId;
}


export async function alteraranime(id, novosdados) {
    const comando = `
        update animes
            set nome = ?,
                genero = ?,
                episodios = ?,
                ano_lancamento = ?,
                estudio = ?,
                avaliacao = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.nome,
        novosdados.genero,
        novosdados.episodios,
        novosdados.ano_lancamento,
        novosdados.estudio,
        novosdados.avaliacao,
        id
    ]);
    return info;
}


export async function removeranime(id) {
    const comando = `
        delete from animes
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}
