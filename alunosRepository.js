import { conection } from './conection.js'

export async function listaraluno() {
    const comando = `
        SELECT *
            FROM aluno
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserialuno(novoaluno){
   const comando = `
        INSERT INTO aluno (nome, email, data_nascimento, curso_id)
            values (?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
    novoaluno.nome,
    novoaluno.email,
    novoaluno.data_nascimento,
    novoaluno.curso_id   
  ])
        

 return Info.insertId
}
    