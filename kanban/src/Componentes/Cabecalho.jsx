import { Link } from "react-router-dom"

export function Cabecalho(){
    return(
        <header className="conteiner">
            <section className="barraTexto">
                <h1 className="titulo">Gerenciamento de Tarefas</h1>
            </section>

            <nav className="barra">
                <ul>
                    <li><Link to ='/cadUsuario'>Cadastro de Usuário </Link></li>
                    <li><Link to= '/cadTarefas'>Gerenciamento de Tarefas</Link></li>
                </ul>
            </nav>

        </header>
    )
}