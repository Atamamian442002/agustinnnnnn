/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var importeMasIva;
    var valorDelImpuesto;
    var iva;

    iva=21;
    importe="33";

    importe=parseInt(importe);
    Impuesto= importe*21/100
    ImporteMasIva=importe+ importe*21/100;
    console.log("importe final"+importeMasIva);
}
