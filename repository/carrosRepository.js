import { conection } from './conection.js'


export async function listarcarros() {
    const comando = `
        select *
            from carros
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarcarro(id) {
    const comando = `
        select *
            from carros
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarcarropormodelo(modelo) {
    const comando = `
        select *
            from carros
            where modelo like ?
    `;

    const [registros] = await conection.query(comando, ['%'+modelo+'%']);
    return registros;
}


export async function inserircarro(novocarro) {
    const comando = `
        insert into carros (valor, placa, modelo, ano_fabricacao, cor, ar_condicionado)
            values (?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novocarro.valor,
        novocarro.placa,
        novocarro.modelo,
        novocarro.ano_fabricacao,
        novocarro.cor,
        novocarro.ar_condicionado
    ]);
    return info.insertId;
}


export async function alterarcarro(id, novosdados) {
    const comando = `
        update carros
            set valor = ?,
                placa = ?,
                modelo = ?,
                ano_fabricacao = ?,
                cor = ?,
                ar_condicionado = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.valor,
        novosdados.placa,
        novosdados.modelo,
        novosdados.ano_fabricacao,
        novosdados.cor,
        novosdados.ar_condicionado,
        id
    ]);
    return info;
}


export async function removercarro(id) {
    const comando = `
        delete from carros
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}

