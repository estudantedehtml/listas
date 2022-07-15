//
class Itens {
//
    constructor() {
        this.id = 1;
        this.array = []
    }
//
    adicionar() {
        let itens = this.lerDados();
        if(this.validaCampos(itens)){
            this.editar(itens)
        }   

        this.listar();
    }
//
    listar(){
        let listas = document.getElementById('listas');
        listas.innerText = ''
        for(let i = 0; i < this.array.length; i++) {       
            let nome = listas 
            nome.innerHTML  += `<br> ${this.array[i].id}- ${this.array[i].nomeItem} `
            let img = document.createElement('img')  
            img.src = 'excluir.png'                
            nome.appendChild(img)   
            img.setAttribute('onclick', "item.excluir("+ this.array[i].id+")")

        }
    }
//
    editar(itens){
        this.array.push(itens);
        this.id++;
    }
//
    lerDados() {
        var itens = {}
        itens.id = this.id       
        itens.nomeItem = document.getElementById('text').value;
        

        return itens;
    }
//
    excluir(id) {
        let listas = document.getElementById('listas');
       for(let i = 0; i < this.array.length; i++) {
        if(this.array[i].id == id){          
            let nome = listas
            this.array.splice(i, 1)
            this.id--
        }
       }
    }
//
    validaCampos(itens) {

        let msg = '';

        if(itens.nomeItem == '') {
            msg += 'informe o item \n' 
        }

        if(msg != '') {
            alert(msg)
            return false
        }

        return true
    }
}

//
var item = new Itens();

let deletar = document.getElementById('deletar')

function delcampo() {
    document.getElementById('text').value = null;
}
deletar.addEventListener('click', delcampo)


