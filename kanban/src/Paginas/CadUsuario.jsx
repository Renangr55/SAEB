//formas para fazer a validação de um formulário usando o REACT
//zod, trabalha com mais componentes para fazer sentido na sua valaidação
//Os triamigos são "zod" "useForm", //resolvers (mãezona)
import { useForm } from "react-hook-form";
import { regex, z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
 
//zod campo a campo o que eu valido, e ql a mensagem que eu exibo , se der um erro

const schemaCadUsuario = z.object({
    //o que eu recebo
    nome: z.string()
        .min(1,'Preencha o campo nome, por favor')
        .max(30, 'O campo permite até 30 caracteres')
        .regex(new RegExp(/^[a-zA-Z]+$/), 'Não aceitamos numeros e nem caracteres especiais'),

   
    email: z.string()
        .min(1, 'Preencha o campo email, por favor')
        .max(50, 'O campo permite até 50 caracteres')
        .email('Insira um email válido')
        .regex(new RegExp(/^[a-z0-9]+@[a-z0-9]+\.[a-z]+\.?$/i), "Formato inválido")
       
    });
 
// Crianção do componente
export function CadUsuario(){
   // 
    const {
    register,//registra para mim 
    handleSubmit,// no momento em que eu submeter(clicar em cadastrar)
    formState: { errors }, //o que ta no formulario // se der ruim deixa na variavel errors
    reset
} = useForm({ resolver: zodResolver(schemaCadUsuario) });//mamae junta os 3 e faz a validação
 
    async function obterDados(data) {
        console.log("dados inseridos", data)
 
        //chamada a API 
        try{
            await axios.post('http://127.0.0.1:8000/usuario/', data);
            alert("Usuário cadastrado com sucesso!!");
            reset();
        // se der problema mostro uma mensagem de erro
        }catch(error){
            alert("Houve um erro durante o cadastro, qualquer problema chama o Paulo");
            console.error("Deu ruim hein", error)
        }
       
    }    
    return(
        //no momento da submissao chamo as funções 
        <form className="formulario"onSubmit={handleSubmit(obterDados)}>
            <h2>Cadastro de Usuário</h2>
            <label>Nome:</label>
            {/* o register pega o valor inserido num campo input */}
            <input type="text" placeholder="Jose da Silva" {...register('nome')}/>
            {/* Se der erro eu crio um novo paragrafo para exibir a mensagem */}
            {errors.nome && <p>{errors.nome.message}</p>}
 
            <label>E-mail:</label>
            <input type='email' placeholder="email@dominio.com.br" {...register('email')}/>
            {errors.email && <p>{errors.email.message}</p>}
 
            <button type="submit">Cadastrar</button>
        </form>
    )
}