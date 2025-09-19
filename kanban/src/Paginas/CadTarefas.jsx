import React from "react";
import { Cabecalho } from "../Componentes/Cabecalho";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const schemaCadTarefas = z.object({
    descricao: z.string()
    .min(1,"Precisa ter mais que um caracter"),

    setor: z.string()
    .min(1,"Precisamos de 1 caracter pelo menos"),
})

export function CadTarefas(){
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({ resolver: zodResolver(schemaCadTarefas)})

        async function obterdados(data) {
            console.log(`dados inseridos: ${data}`)
        }
    return (
        <>
            <form className="formularioTarefas" onSubmit={handleSubmit(obterdados)}>
                <h2>Criar tarefas</h2>
                
                <label>Descricao: </label>
                <input type="text" placeholder="Codificar back-end" {...register('descricao')} />
                {errors.descricao && <p>{errors.descricao.message}</p>}

                <label>Setor: </label>
                <input type="text" placeholder="BISB" {...register('setor')}/>

                <label>Prioridade: </label>
                <select name="opcoesPrioridade" id="">
                    <option value="teste">teste</option>
                    <option value="teste">teste</option>
                    <option value="teste">teste</option>
                </select>

                <label>Status da atividade: </label>
                <select name="opcoesPrioridade" id="">
                    <option value="teste">compelto</option>
                    <option value="teste">teste</option>
                    <option value="teste">teste</option>
                </select>

                <button type="submit" Cadatsrar>
                    Cadastrar
                </button>
            </form>
        </>
    )
}