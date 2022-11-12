import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [url, setUrl] = useState(" ");

  const handleInput = event => {
    setUrl(event.target.value);
  };
  const logValue = () => {
    console.log(url);
	enviar(url)
  };


  function enviar(url){
	
	const p_resposta = document.getElementById('p_url_retorno')
	const div_resposta = document.getElementById('container_resposta')

	const bodys ={
	  "url":url,
	 
	}
	const headers = {'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
	
	var url = "http://137.184.83.209:5000/encurta_url"
	var bory = JSON.stringify(bodys)
	
	fetch(url,{
	  method:"POST", 
	  body: bory
	}).then(function(Response){
		return Response.json()}).then(function(data){
			console.log(data)
			p_resposta.innerText=data.url
			div_resposta.style.display='flex'
		})
	}
  



  return (
    <div className="App">
      <h1>Encurtador de url</h1>

      <div className='box_pesquisa'>
        <input onChange={handleInput} className='input_pesuisa' type="search" name="Encurta_url" id="input_url" placeholder='Digite sua url'/>
		<button onClick={logValue} className='botao_pesquisa'>Enviar</button>
	  </div>

      <div className='box_resposta' id='container_resposta'>
        <h2>Copie sua url encurtada</h2>
        <p className='p_resposta' id='p_url_retorno'></p>
      </div>

       
    <footer>
    	
    	<div className="box_footer">
    		<div className="endereco">
    			<div>
            <a className="div_social" href="https://www.linkedin.com/in/marcio-bob-7221631b7">
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff"  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="img_rede"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            
            <p className='txt_social'>
              Linkedin
            </p>
          
            </a>
    
          </div>
    		
    		<div >
	    		<a className="div_social" href="https://www.instagram.com/invites/contact/?i=6ttdx9gjhj74&utm_content=2mwx77h">
	    			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill=" #ffffff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="img_rede"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
	    			
	    			<p className="txt_social">
	    				Instagram
	    			</p>
	    			
	    		</a>
	    		
    		</div>
    		
    			<div>
    		<a className="div_social" href="https://marciobob47@gmail.com">
    			<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ffffff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="img_rede"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    			
    			<p className="txt_social">
	    				Email
	    		</p>
    		
    		</a>
    	</div>
    		</div>
    		 
    			
    		<div className="endereco">
    		
    				<strong className="txt_endereco">
    					Endereço 
    				</strong>
    				
    				<p className="txt_endereco"> 
    				Nuno guerne de almeida n°31 a 
    				</p>
    				<p className="txt_endereco">
    					Bairro Grajaú
    				</p>
    				<p className="txt_endereco">São Paulo</p>
    				<strong className="txt_endereco">
    					Telefone
    				</strong>
    				<p className="txt_endereco">11-943939083</p>
    		</div>
    	
    	</div>
   
      <div className="txtrodape">
      <p className="txtrodape">&copy; PensadorWeb</p>
      </div>
      
    </footer>

    </div>
  )
}

export default App
