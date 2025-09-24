import { conection } from './conection.js'


export async function listarseries() {
    const comando = `
        select *
            from series
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarserie(id) {
    const comando = `
        select *
            from series
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarseriepornome(titulo) {
    const comando = `
        select *
            from series
            where titulo like ?
    `;

    const [registros] = await conection.query(comando, [`%${titulo}%`]);
    return registros;
}


export async function inserirserie(novaserie) {
    const comando = `
        insert into series (titulo, ano_lancamento, genero, temporadas, criador, avaliacao)
            values (?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novaserie.titulo,
        novaserie.ano_lancamento,
        novaserie.genero,
        novaserie.temporadas,
        novaserie.criador,
        novaserie.avaliacao
    ]);
    return info.insertId;
}


export async function alterarserie(id, novosdados) {
    const comando = `
        update series
            set titulo = ?,
                ano_lancamento = ?,
                genero = ?,
                temporadas = ?,
                criador = ?,
                avaliacao = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.titulo,
        novosdados.ano_lancamento,
        novosdados.genero,
        novosdados.temporadas,
        novosdados.criador,
        novosdados.avaliacao,
        id
    ]);
    return info;
}


export async function removerserie(id) {
    const comando = `
        delete from series
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}
