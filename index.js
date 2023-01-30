function verificarIdade () {
    var date = new Date();
    var anoAtual = date.getFullYear();
    var anoNasc = document.getElementById('ano-nasc');
    var resp = document.getElementById('resp');
    
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        alert ("[ERRO] Verifique os dados e tente novamente");
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = anoAtual - Number(anoNasc.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
            if (fsex[0].checked) {
                genero = "Homem";
                if (idade >= 0 && idade < 10) {
                    img.src = "img/homem-crianca-modified.png"
                } else if (idade < 25) {
                    img.src = "img/homem-jovem-modified.png"
                } else if (idade < 50) {
                    img.src = "img/homem-adulto-modified.png"
                } else {
                    img.src = "img/homem-idoso-modified.png"
                }   

            } else if (fsex[1].checked) {
                genero = "Mulher";
                if (idade >= 0 && idade < 10) {
                    img.src = "img/mulher-crianca-modified.png"
                } else if (idade < 25) {
                    img.src = "img/mulher-jovem-modified.png"
                } else if (idade < 50) {
                    img.src = "img/mulher-adulto-modified.png"
                } else {
                    img.src = "img/mulher-idoso-modified.png"
                }   
            }
        resp.style.textAlign = 'center';
        resp.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        resp.appendChild(img);
    }
}