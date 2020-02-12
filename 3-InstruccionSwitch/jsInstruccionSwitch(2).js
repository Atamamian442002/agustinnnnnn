function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;


switch(mesDelAnio)
{
    case "Enero":
    case "Febrero":
    case"Marzo":
    case"Abril":
    case"Mayo":
    case"Junio":
    {
        alert("falta para el invierno");
        break;
    }
    case"Julio":
    case"Agosto":
    {
        alert("hace frio abrigate");
        break;
    }
    default:
        {
            alert("ya pasamos el invierno");
            break;
        }
}



}//FIN DE LA FUNCIÓN