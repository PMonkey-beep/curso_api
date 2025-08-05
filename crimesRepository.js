import { conection } from './conection.js'

export async function listarcrimes() {
    const comando = `
        SELECT *
            FROM crimes
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserircrimes(novocrimes){
   const comando = `
        INSERT INTO crimes (nome_crime)
            values (?)
   `;

   const [Info] = await conection.query(comando, [
    novocrimes.nome_crime
  ])
        

 return Info.insertId
}