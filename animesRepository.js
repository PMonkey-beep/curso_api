import { conection } from './conection.js'

export async function listaranimes() {
    const comando = `
        SELECT *
            FROM animes
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inseriranimes(novopizzas){
   const comando = `
        INSERT INTO pizzas (nome, genero, episodios, ano_lancamento, estudio, avaliacao)
            values (?, ?, ?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
        novoanimes.nome,
        novoanimes.genero,
        novoanimes.episodios,
        novoanimes.ano_lancamento,
        novoanimes.estudio,
        novoanimes.avaliacao
  ])
        

 return Info.insertId
}