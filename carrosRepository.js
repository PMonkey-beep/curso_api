import { conection } from './conection.js'

export async function listarcarros() {
    const comando = `
        SELECT *
            FROM carros
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserircarros(novocarros){
   const comando = `
        INSERT INTO carros (id, valor, placa, modelo, ano_fabricacao, cor, ar_condicionado)
            values (?, ?, ?, ?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
        novocarros.id,
        novocarros.valor,
        novocarros.modelo,
        novocarros.ano_fabricacao,
        novocarros.cor,
        novocarros.ar_condicionado
 ])

 return Info.insertId
}