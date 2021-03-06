import * as yup from "yup";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import { Link, useHistory } from "react-router-dom";




function Cadastro ({setCadastro}){
  const home = useHistory()   //encaminha para HOME apos cadastro
  
  
  const formSchema = yup.object().shape({
    name:         yup.string().required('Nome Obrigatorio.'),
    email:        yup.string().required('Email Obrigatorio.').email('Email inválido.'),
    emailConf:    yup.string().oneOf([yup.ref('email')], 'Email nao corresponde.').required('Confirme o Email.'),
    tel:          yup.string().matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, 'Numero invalido').required('Telefone Obrigatorio.'),
    cidade:       yup.string().required('Cidade Obrigatorio.'),
    senha:        yup.string().matches(/(?=^.{4,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, '4 Char, Upper, Lower, Carc.').required('Senha Obrigatorio.'),
    senhaConfirm: yup.string().oneOf([yup.ref('senha')], 'Senha nao corresponde.').required('Confirme a senha'),
    check:        yup.boolean().default(false).oneOf([true],'Aceite os termos')


  })




  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(formSchema)
    
  })

  

  //onsubmit imprime seta os dados em CADASTRO
 const mostrar = (data) => {setCadastro(data); home.push('/home')}

 

  return (   
    

    <div className="App">
  
      <header className="container">
        <h2>Entre se tiver Coragem...</h2>
        <form className='form' onSubmit={handleSubmit(mostrar)}>
          <div className='inputs'>
            <input placeholder='Nome de usuario *'    {...register('name')}/>
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className='inputs'>
            <input placeholder='Endereço de Email *'  {...register('email')}/>
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className='inputs'>
            <input placeholder='Confirme o Email *'  {...register('emailConf')}/>
            {errors.emailConf && <p>{errors.emailConf.message}</p>}
          </div>

          <div className='inputs'>
            <input placeholder='Telefone *'           {...register('tel')}/>
            {errors.tel && <p>{errors.tel.message}</p>}
          </div>

          <div className='inputs'>
            <input placeholder='Cidade *'             {...register('cidade')}/>
            {errors.cidade && <p>{errors.cidade.message}</p>}
          </div>

          <div className='inputs'>
            <input placeholder='Cerveja'/>
          </div>

          <div className='inputs inputsSenha'>
            <input placeholder='Senha *' className='senha'  {...register('senha')}/> 
            {errors.senha && <p>{errors.senha.message}</p>}
          
            <label>Confirme sua senha *</label>
            <input className='senha senhaConfirm'            {...register('senhaConfirm')}/>
            {errors.senhaConfirm && <p>{errors.senhaConfirm.message}</p>}
          </div>


        
          <div className='inputs check checkdiv'>
            <input type='checkbox' className='check' {...register('check')}/>
            {errors.check && <p>{errors.check.message}</p>}
            <label className='termos'>Eu aceito os termos de uso.</label>
          </div>

          <button type='submit'>Enviar!</button>

          <Link to="/login">Ja possui uma conta?</Link>

        </form>
               
      </header>
    </div>
  );
}

export default Cadastro

