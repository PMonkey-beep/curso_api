import { conection } from './conection.js'


export async function listarroupa() {
    const comando = `
        select *
            from roupa
    `;

    const [registros] = await conection.query(comando);
    return registros;
}


export async function consultarroupa(id) {
    const comando = `
        select *
            from roupa
            where id = ?
    `;

    const [registros] = await conection.query(comando, [id]);
    return registros[0];
}


export async function filtrarroupapornome(nm_roupa) {
    const comando = `
        select *
            from roupa
            where nm_roupa like ?
    `;

    const [registros] = await conection.query(comando, [`%${nm_roupa}%`]);
    return registros;
}


export async function inserirroupa(novoroupa) {
    const comando = `
        insert into roupa (nm_roupa, nm_cor, nm_marca, vl_preco, bt_disponivel, qtd_estoque)
            values (?, ?, ?, ?, ?, ?)
    `;

    const [info] = await conection.query(comando, [
        novoroupa.nm_roupa,
        novoroupa.nm_cor,
        novoroupa.nm_marca,
        novoroupa.vl_preco,
        novoroupa.bt_disponivel,
        novoroupa.qtd_estoque
    ]);
    return info.insertId;
}


export async function alterarroupa(id, novosdados) {
    const comando = `
        update roupa
            set nm_roupa = ?,
                nm_cor = ?,
                nm_marca = ?,
                vl_preco = ?,
                bt_disponivel = ?,
                qtd_estoque = ?
            where id = ?
    `;

    const [info] = await conection.query(comando, [
        novosdados.nm_roupa,
        novosdados.nm_cor,
        novosdados.nm_marca,
        novosdados.vl_preco,
        novosdados.bt_disponivel,
        novosdados.qtd_estoque,
        id
    ]);
    return info;
}


export async function removerroupa(id) {
    const comando = `
        delete from roupa
            where id = ?
    `;

    const [info] = await conection.query(comando, [id]);
    return info;
}
