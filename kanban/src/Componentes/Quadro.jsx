//hooks são palavras reservadas que nos ajudam a desenvolver nossas aplicações
//começou com "use" 98% de chance de ser um hook do react
//state grava o estado atual de uma variavel
//effect é fofoqueiro, ele quer contar o que o usuário precisa saber
import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Coluna } from './Coluna';

export function Quadro(){
    const [tarefas, setTarefas] = useState([])

    //()recepção de parametros, {} scripts, []dependencias
    useEffect(()=>{
        const apiURL = 'http://127.0.0.1:8000/tarefa/';
        //axios faz requisição http
        axios.get(apiURL)
            //se der bom eu armazeno o settarefas usando a resposta do axios
            .then(response =>{ setTarefas(response.data)})
            //se der ruim eu vejo o problema no console
            .catch(error => { console.error("Deu ruim", error)})
    },[])

       //tenho 3 arrays cada qual com um status de tarefas possivel no meu kanban 
     const tarefasAfazer = tarefas.filter(tarefa=>tarefa.status ==='A fazer');
     const tarefasFazendo = tarefas.filter(tarefa =>tarefa.status ==='Fazendo');
     const tarefasPronto = tarefas.filter(tarefa=>tarefa.status ==='Pronto');
     

     return(
        <main>
            <h1>Quadro</h1>
            <Coluna titulo = 'A fazer' tarefas={tarefasAfazer}/>
            <Coluna titulo = 'Fazendo' tarefas={tarefasFazendo}/>
            <Coluna titulo ='Pronto' tarefas={tarefasPronto}/>
        </main>
     )
}