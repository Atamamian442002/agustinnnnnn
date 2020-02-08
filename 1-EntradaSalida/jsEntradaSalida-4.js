/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var nombre;
nombre = prompt("cual es tu nombre");
//primero hay que buscar el id para poder usarlo
document.getElementById("elNombre").value = nombre;
}

