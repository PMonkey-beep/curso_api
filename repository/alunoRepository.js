import { conection } from './conection.js'


export async function listaraluno() {
    const comando = `
        select *
            from aluno
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultaraluno(id) {
    const comando = `
        select *
            from aluno
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtraralunopornome(nome) {
    const comando = `
        select *
            from aluno
            where nome like ?
    `;

    const [registros] = await conection.query(comando, [`%${nome}%`]);
    return registros;
}


export async function inseriraluno(novoaluno) {
    const comando = `
        insert into aluno (nome, email, data_nascimento, curso_id)
            values (?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novoaluno.nome,
        novoaluno.email,
        novoaluno.data_nascimento,
        novoaluno.curso_id
    ]);
    return info.insertId;
}


export async function alteraraluno(id, novosdados) {
    const comando = `
        update aluno
            set nome = ?,
                email = ?,
                data_nascimento = ?,
                curso_id = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.nome,
        novosdados.email,
        novosdados.data_nascimento,
        novosdados.curso_id,
        id
    ]);
    return info;
}


export async function removeraluno(id) {
    const comando = `
        delete from aluno
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}
