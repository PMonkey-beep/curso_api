import { conection } from './conection.js'

export async function listarseries() {
    const comando = `
        SELECT *
            FROM series
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserirseries(novoseries){
   const comando = `
        INSERT INTO series (titulo, ano_lancamento, genero, temporadas, criador, avaliacao,)
            values (?, ?, ?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
        novoseries.titulo,
        novoseries.ano_lancamento,
        novoseries.genero,
        novoseries.temporadas,
        novoseries.criador,
        novoseries.avaliacao
 ])

 return Info.insertId
}