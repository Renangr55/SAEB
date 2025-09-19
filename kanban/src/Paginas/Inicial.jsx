import { Outlet } from "react-router-dom";
import { Cabecalho } from "../Componentes/Cabecalho";


export function Inicial (){
    return(
        <>
            <Cabecalho/>
            <Outlet/>
        </>
    )
}