import { conection } from './conection.js'


export async function listarcurso() {
    const comando = `
        select *
            from curso
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarcurso(id) {
    const comando = `
        select *
            from curso
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarcursopornome(nome) {
    const comando = `
        select *
            from curso
            where nome like ?
    `;

    const [registros] = await conection.query(comando, [`%${nome}%`]);
    return registros;
}


export async function inserircuso(novocurso) {
    const comando = `
        insert into curso (nome, carga_horaria, area)
            values (?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novocurso.nome,
        novocurso.carga_horaria,
        novocurso.area
    ]);
    return info.insertId;
}


export async function alterarcurso(id, novosdados) {
    const comando = `
        update curso
            set nome = ?,
                carga_horaria = ?,
                area = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.nome,
        novosdados.carga_horaria,
        novosdados.area,
        id
    ]);
    return info;
}


export async function removercurso(id) {
    const comando = `
        delete from curso
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}
