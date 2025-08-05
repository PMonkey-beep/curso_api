import { conection } from './conection.js'

export async function listarprisioneiros() {
    const comando = `
        SELECT *
            FROM prisioneiros
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserirprisioneiros(novoprisioneiros){
   const comando = `
        INSERT INTO prisioneiros (nm_prisioneiro, nm_trabalho, bt_comportamento, nm_bloco, nr_pena, dt_prisao)
            values (?, ?, ?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
        novoprisioneiros.nm_prisioneiro,
        novoprisioneiros.nm_trabalho,
        novoprisioneiros.bt_comportamento,
        novoprisioneiros.nm_bloco,
        novoprisioneiros.nr_pena,
        novoprisioneiros.dt_prisao
        
  ])
        

 return Info.insertId
}
    