let fotos = ["foto1.png", "foto2.png", "foto3.png"];

function TrocarFoto(foto){
    document.querySelector(".imagem-banner").src = "imagens/"+fotos[foto];
}

let fotoAtual = 0;
TrocarFoto(fotoAtual);

setInterval(function(){
    fotoAtual++;
    if(fotoAtual > 2){
        fotoAtual = 0;
    }

    TrocarFoto(fotoAtual);
} , 3000);  

document.querySelector("#btFoto1").addEventListener("clik", function(){TrocarFoto(0);
});

document.querySelector("#btFoto2").addEventListener("clik", function(){TrocarFoto(1);
});

document.querySelector("#btFoto3").addEventListener("clik", function(){TrocarFoto(2);
});