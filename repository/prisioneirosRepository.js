import { conection } from './conection.js'


export async function listarprisioneiros() {
    const comando = `
        select *
            from prisioneiros
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarprisioneiro(id) {
    const comando = `
        select *
            from prisioneiros
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarprisioneiropornome(nm_prisioneiro) {
    const comando = `
        select *
            from prisioneiros
            where nm_prisioneiro like ?
    `;

    const [registros] = await conection.query(comando, [`%${nm_prisioneiro}%`]);
    return registros;
}


export async function inserirprisioneiro(novoprisioneiro) {
    const comando = `
        insert into prisioneiros (nm_prisioneiro, nm_trabalho, bt_comportamento, nm_bloco, nr_pena, dt_prisao)
            values (?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novoprisioneiro.nm_prisioneiro,
        novoprisioneiro.nm_trabalho,
        novoprisioneiro.bt_comportamento,
        novoprisioneiro.nm_bloco,
        novoprisioneiro.nr_pena,
        novoprisioneiro.dt_prisao
    ]);
    return info.insertId;
}


export async function alterarprisioneiro(id, novosdados) {
    const comando = `
        update prisioneiros
            set nm_prisioneiro = ?,
                nm_trabalho = ?,
                bt_comportamento = ?,
                nm_bloco = ?,
                nr_pena = ?,
                dt_prisao = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.nm_prisioneiro,
        novosdados.nm_trabalho,
        novosdados.bt_comportamento,
        novosdados.nm_bloco,
        novosdados.nr_pena,
        novosdados.dt_prisao,
        id
    ]);
    return info;
}


export async function removerprisioneiro(id) {
    const comando = `
        delete from prisioneiros
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}

    