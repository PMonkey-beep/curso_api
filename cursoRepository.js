import { conection } from './conection.js'

export async function listarcurso() {
    const comando = `
        SELECT *
            FROM curso
    `;

    const [registros] = await conection.query(comando);
    return registros;
}

export async function Inserircurso(novocurso){
   const comando = `
        INSERT INTO curso (nome, carga_horaria, area)
            values (?, ?, ?, ?)
   `;

   const [Info] = await conection.query(comando, [
    novocurso.nome,
    novocurso.carga_horaria,
    novocurso.area
  ])
        

 return Info.insertId
}