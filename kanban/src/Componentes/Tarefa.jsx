//props: são propriedades que passam de um componente para outro
export function Tarefa({tarefa}){
    return(
        <article>
            <h3 id={tarefa.id}>{tarefa.descricao}</h3>
            <dl>
                <dt>Setor:</dt>
                <dd>{tarefa.setor}</dd>

                <dt>Prioridade:</dt>
                <dd>{tarefa.prioridade}</dd>
            </dl>
            <button type="submit">Editar</button>
            <button type="submit">Excluir</button>

            <form>
                <label>Status:</label>
                <select id={tarefa.id} name="status">
                    <option value = ''>Selecione o status</option>
                    <option value = 'A fazer'>A fazer</option>
                    <option value = 'Fazendo'>Fazendo</option>
                    <option value = 'Pronto'>Pronto</option>
                </select>
                <button type='submit'>Alterar Status</button>
            </form>
        </article>
    )
}