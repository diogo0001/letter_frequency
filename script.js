// obtém a entrada do usuário e verifica se é válida --------------------------------
function getValidInput(){
			
    var str = document.getElementById("str-input").value;
    var regex = /(([a-z]+[A-Z]+)|([0-9]+)|([A-Z]+)|([\W]))/;

    if(str.length<2){
        alert("A string deve ter no mínimo 2 letras!");
        return 0;
    }

    if(regex.test(str)){
        alert("A string é inválida!");
        return 0;
    }

    return str;
}

// realiza a busca -------------------------------------------------------------------
function findRepeatedChars(){

    var strIn = getValidInput();

    if(strIn!=0){

        var dict = {};              // dicionário {letra,qtde}
        
        for(var i=0;i<strIn.length;i++){
            var letter = strIn.charAt(i);
            if(dict[letter]){       // verifica a ocorrência da letra e realiza a contagem
                dict[letter]++;
            }
            else{
                dict[letter] = 1;
            }
        }     
                
        console.log("=================================")       // depuração no console
        console.log(strIn);
        console.log(dict);
        console.log("Tamanho da string: "+ strIn.length);
        console.log("Tamanho do dict: "+ Object.keys(dict).length);
        
        auxCount = 0;

        for(var key in dict){
            var value = dict[key];
            if(value%2 == 0){       // se o número de letras encotradas for par
                auxCount++;         // deve entrar apenas uma vez neste if, senão não retorna
                var char = key;
            }
            console.log("key: "+key ,"value: "+value);
        }

        if(auxCount==1){
            console.log("Encontrou um caractere");
            showData(strIn,char);
        }
        else{
            console.log("Não encontrou");
            showData(strIn,'--');
        }
    }
    console.log("=================================");
    document.getElementById("str-input").value = "";
}

// mostra os dados -------------------------------------------------------------------
function showData(strIn,charOut){
    document.getElementById("show-input").innerHTML = strIn;
    document.getElementById("show-output").innerHTML = charOut;
}

// limpa todos os dados --------------------------------------------------------------
function clearAll(){
    document.getElementById("show-input").innerHTML = "";
    document.getElementById("show-output").innerHTML = "";
    document.getElementById("str-input").value = "";
    console.clear();
}