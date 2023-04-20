import { useState, useEffect } from 'react';

function Cadastro (){
    
    
    const [input, setInput] = useState('');
    const [user, setUser] = useState('');
    const [corRadius, setCorRadius] = useState('white');
    const [tarefas, setTarefas] = useState([
        "Pagar a conta de luz",
        "Estudar programação",
        "Enviar a tarefa"
    ]);
  
 
        useEffect(() =>{
            const userStorage = localStorage.getItem('@user');
            
            if(!userStorage){
            const nome = prompt('Qual o seu nome? ');
            setUser(nome);
            localStorage.setItem('@user', nome);  
            }else{
                setUser(userStorage)
            }
        }, []);


    const tarefasStorage = localStorage.getItem('@tarefa');
 
        useEffect(() =>{
            if(tarefasStorage){
                setTarefas(JSON.parse(tarefasStorage));
            }
        },[]);

    useEffect(() =>{

        localStorage.setItem('@tarefa', JSON.stringify(tarefas))
        
    }, [tarefas]);

    function handleRegistro(e){ //handle é um identificador de objeto

        e.preventDefault();

        setTarefas([...tarefas, input]);
        setInput('');
    }

    function handleCorRadius(e){
        setCorRadius(e.target.value)
    }

    const background ={
        backgroundColor: corRadius,
    }

    return ( //onSubmit é uma ótima forma de se automatizar . FAz o navegador validar informações que foram enviadas através de um formulario antes que o servidor receba.
        <div style = {background}> 

            <h1>{user},sua lista de tarefa</h1>

            <form onSubmit = {handleRegistro}> 
            <label>Nome da tarefa: </label><br/>
            <input placeholder= 'Digite uma tarefa'
            value={input}
            onChange={ (e) => setInput(e.target.value)} 
            /><br/>
            


        <button type='submit'>Registro</button>

        </form>
        <br/><br/>

        {tarefas.map( tarefas=> (
            <li key ={tarefas}>{tarefas}</li>
        ))}
            
        <br/><br/>

        <div>
            <input type='radio' id='blueviolet' name='corRadius' value='blueviolet' onChange={handleCorRadius} />
            <label htmlFor='blueviolet'> BlueViolet</label><br />
            <input type='radio' id='cadetblue' name='corRadius' value='cadetblue' onChange={handleCorRadius} />
            <label htmlFor='cadetblue'> CadetBlue</label><br />
            <input type='radio' id='cornsilk' name='corRadius' value='cornsilk' onChange={handleCorRadius} />
            <label htmlFor='cornsilk'> Cornsilk</label><br />
        </div>

    </div>

        
            
    );
            
            

}

export default Cadastro;