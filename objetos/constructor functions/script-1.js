

function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido
}//a função costrutura da como referencia para outros objetos

const honda = new Carro();// um objeto tipo carro
honda.marca = "Honda";
honda.preco=3000;


const fiat =  new Carro();
fiat.marca= 'fiat'
fiat.preco = 34000

const cherry = new Carro('Cherry', 80000)
const audi = new Carro("Audi", 120000)


function Carro2(marca, precoIncial){
    const taxa = 1.2;
    const precoFinal = precoIncial* taxa;

    this.marca = marca;
    this.preco = precoFinal
}

const BMW = new Carro2('BMW', 100000)