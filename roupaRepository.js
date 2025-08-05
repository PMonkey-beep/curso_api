import { conection } from './conection.js'

export async function listarroupa() {
    const comando = `
        SELECT *
            FROM roupa
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserirroupa(novoroupa){
   const comando = `
        INSERT INTO roupa (nm_roupa, nm_cor, nm_marca, vl_preco, bt_disponivel, qtd_estoque)
            values (?, ?, ?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
    novoroupa.nm_roupa,
    novoroupa.nm_cor,
    novoroupa.nm_marca,
    novoroupa.vl_preco,
    novoroupa.bt_disponivel,
    novoroupa.qtd_estoque     
  ])
        

 return Info.insertId
}
    