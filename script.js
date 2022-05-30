document.getElementById("radio1").checked = true;

var cont = 0;

setInterval(function (){
    nextImage();
},5000)

function nextImage(){
    cont++;

    if(cont > 4){
        cont = 1;
    }

    document.getElementById("radio" + cont).checked = true;
}

var qtde1 = 0,
qtde2 = 0,
qtde3 = 0,
qtde4 = 0,
qtde5 = 0,
qtde6 = 0,
qtde7 = 0,
qtde8 = 0;

var produto1 = document.getElementById("produto1"),
produto2 = document.getElementById("produto2"),
produto3 = document.getElementById("produto3"),
produto4 = document.getElementById("produto4"),
produto5 = document.getElementById("produto5"),
produto6 = document.getElementById("produto6"),
produto7 = document.getElementById("produto7"),
produto8 = document.getElementById("produto8"),
calculo = document.getElementById("total");

var valProduto1 = 299.90,
valProduto2 = 259.90,
valProduto3 = 349.99,
valProduto4 = 499.90,
valProduto5 = 189.90,
valProduto6 = 1259.90,
valProduto7 = 789.99,
valProduto8 = 39.90,
valorTotal = 0;


function adicionar1(){
    qtde1++;

    produto1.innerHTML = `${qtde1}`
}
function adicionar2(){
    qtde2++;

    produto2.innerHTML = `${qtde2}`
}
function adicionar3(){
    qtde3++;

    produto3.innerHTML = `${qtde3}`
}
function adicionar4(){
    qtde4++;

    produto4.innerHTML = `${qtde4}`
}
function adicionar5(){
    qtde5++;

    produto5.innerHTML = `${qtde5}`
}
function adicionar6(){
    qtde6++;

    produto6.innerHTML = `${qtde6}`
}
function adicionar7(){
    qtde7++;

    produto7.innerHTML = `${qtde7}`
}
function adicionar8(){
    qtde8++;

    produto8.innerHTML = `${qtde8}`
}

function subtrair1(){
    qtde1--;

    if(qtde1 <= 0){
        qtde1 = 0;
    }

    produto1.innerHTML = `${qtde1}`
}
function subtrair2(){
    qtde2--;

    if(qtde2 <= 0){
        qtde2 = 0;
    }

    produto2.innerHTML = `${qtde2}`
}
function subtrair3(){
    qtde3--;

    if(qtde3 <= 0){
        qtde3 = 0;
    }

    produto3.innerHTML = `${qtde3}`
}
function subtrair4(){
    qtde4--;

    if(qtde4 <= 0){
        qtde4 = 0;
    }

    produto4.innerHTML = `${qtde4}`
}
function subtrair5(){
    qtde5--;

    if(qtde5 <= 0){
        qtde5 = 0;
    }

    produto5.innerHTML = `${qtde5}`
}
function subtrair6(){
    var produto6 = document.getElementById("produto6");
    qtde6--;

    if(qtde6 <= 0){
        qtde6 = 0;
    }

    produto6.innerHTML = `${qtde6}`
}
function subtrair7(){
    qtde7--;

    if(qtde7 <= 0){
        qtde7 = 0;
    }

    produto7.innerHTML = `${qtde7}`
}
function subtrair8(){
    qtde8--;

    if(qtde8 <= 0){
        qtde8 = 0;
    }

    produto8.innerHTML = `${qtde8}`
}

function calcular(){
    valorTotal = 0;
    valorTotal += (qtde1*valProduto1) + (qtde2*valProduto2) + (qtde3*valProduto3) + (qtde4*valProduto4) +
    (qtde5*valProduto5) +  (qtde6*valProduto6) +  (qtde7*valProduto7) +  (qtde8*valProduto8);

    total.innerHTML = "O valor total de sua compra foi de: R$ " + `${valorTotal.toFixed(2)}`;
}



