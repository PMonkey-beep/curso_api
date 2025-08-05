import { conection } from './conection.js'

export async function listarpizzas() {
    const comando = `
        SELECT *
            FROM pizzas
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserirpizzas(novopizzas){
   const comando = `
        INSERT INTO pizzas (nome, descricao, preco, tamanho, vegetariana, ingredientes, categoria)
            values (?, ?, ?, ?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
        novopizzas.nome,
        novopizzas.descricao,
        novopizzas.preco,
        novopizzas.tamanho,
        novopizzas.vegetariana,
        novopizzas.ingredientes,
        novopizzas.categoria
  ])
        

 return Info.insertId
}