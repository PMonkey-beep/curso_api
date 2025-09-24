import { conection } from './conection.js'


export async function listarcrimes() {
    const comando = `
        select *
            from crimes
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarcrime(id) {
    const comando = `
        select *
            from crimes
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarcrimepornome(nome_crime) {
    const comando = `
        select *
            from crimes
            where nome_crime like ?
    `;

    const [registros] = await conection.query(comando, [`%${nome_crime}%`]);
    return registros;
}


export async function inserircrime(novocrime) {
    const comando = `
        insert into crimes (nome_crime)
            values (?)
    `;

    const [info] = await conection.query(comando, [
        novocrime.nome_crime
    ]);
    return info.insertId;
}


export async function alterarcrime(id, novosdados) {
    const comando = `
        update crimes
            set nome_crime = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.nome_crime,
        id
    ]);
    return info;
}


export async function removercrime(id) {
    const comando = `
        delete from crimes
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}

