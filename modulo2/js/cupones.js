const prices = [15000, 25000, 2300, 7800];
const imgProduct = ['reloj', 'bocina', 'mouse', 'labial'];
const discounts = [10, 15, 20, 25];
const articles = document.getElementById('article');
const cupon = document.getElementById('cupon');



function calcularCupon(){
    switch(articles.value){
        case 0:
            document.getElementById('imgContent').innerHTML = '<img src="./img/' + imgProduct[articles.value] + '.jpg" alt="articulo" class="imgProduct">'
            document.getElementById("priceInput").innerText = 'El precio es :' + prices[articles.value];
        break;
        case 1:
            document.getElementById('imgContent').innerHTML = '<img src="./img/' + imgProduct[articles.value] + '.jpg" alt="articulo" class="imgProduct">'
            document.getElementById("priceInput").innerText = 'El precio es :' + prices[articles.value];
        break;
        case 2:
            document.getElementById('imgContent').innerHTML = '<img src="./img/' + imgProduct[articles.value] + '.jpg" alt="articulo" class="imgProduct">'
            document.getElementById("priceInput").innerText = 'El precio es :' + prices[articles.value];
        break;
        case 3:
            document.getElementById('imgContent').innerHTML = '<img src="./img/' + imgProduct[articles.value] + '.jpg" alt="articulo" class="imgProduct">'
            document.getElementById("priceInput").innerText = 'El precio es :' + prices[articles.value];
        break;
        default:
            document.getElementById('imgContent').innerHTML = '<img src="./img/' + imgProduct[articles.value] + '.jpg" alt="articulo" class="imgProduct">'
            document.getElementById("priceInput").innerText = 'El precio es :' + prices[articles.value];
    }

    const porcentajeDescontado = 100 - parseInt(discounts[cupon.value]);
    const precioFinal = ( parseInt(prices[articles.value]) * porcentajeDescontado) / 100 ;

    document.getElementById('total').innerHTML = '<p id="total"> Hola, el descuento es de ' + discounts[cupon.value] + '% y <br>el precio final es $' + precioFinal +'.</p>'
}