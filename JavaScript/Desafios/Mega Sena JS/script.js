const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    let numeroEscolhido = Number(frm.inNumero.value);
    function megaSena(numeroEscolhido){
        
        let numerosSorteados = new Set();
            if(numeroEscolhido < 6 || numeroEscolhido > 9){
            console.log([], "Não é possível usar esse número");
            resp.innerText = `[] Não é possível usar esse número`
            }else{

                while(numerosSorteados.size < numeroEscolhido){
                    const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
                    numerosSorteados.add(numeroAleatorio);
                }
                
                console.log(...numerosSorteados);
                resp.innerText = `${[...numerosSorteados]}`;
            }
            
    }
    megaSena(numeroEscolhido)   
    
})     
  



