let zapatos = prompt('Digita la cantidad de zapatos que vas a adquirir');
let valorZapato = 50000;


if(zapatos >= 5 ){
    let calculo  = parseInt(zapatos)* valorZapato 
    let descuento = calculo * 0.3
    let resultado = calculo - descuento
    alert(`Felicidades ganaste un 30% de descuento en tu compra , tu valor a pagar es $ ${resultado}`);
}else{
    let calculo  = parseInt(zapatos)* valorZapato 
    alert(`Lastimosamente no aplica el descuento para tu compra , tu valor a pagar es $ ${calculo}`);
}
      
 

