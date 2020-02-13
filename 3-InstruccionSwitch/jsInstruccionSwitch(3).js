function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
    
switch(mesDelAnio){

case "Febrero":
    {
        alert("Este mes n o tiene mas de 29 dias");
        break;
    }
default:
    {
        alert ("Este me tiene mas de treinta dias  ");
    }
}


}//FIN DE LA FUNCIÓN