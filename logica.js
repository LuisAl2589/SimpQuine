
let nVariables = 0;

function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    while ( num > 1 ) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    while (binary.length<nVariables) {
        binary= "0"+binary;
    }
    return binary;
}

function contarUnos(cadena) {
    let contUnos=0;
    for (let j = 0; j < cadena.length; j++) {
        if (cadena[j]=="1") {
            contUnos++;
        }
    }
    return contUnos;
}

function simplificar() {
    let arr=[];
    let renglon;
    let binario;
    for (let i = 0; i < Math.pow(2, nVariables); i++) {
        if (document.getElementById(i).checked==true) {
            binario=convertToBinary1(i);
            
            renglon= new Object();
            renglon.id=[i];
            renglon.bi=binario;
            renglon.unos=contarUnos(binario);

            arr.push(renglon);
        }
        
    }
    console.table(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].id);
        
    }

    simpliR(arr);
    
}

function obLetra(flag,pos) {
    let r = "";
    if (flag) {
        r=String.fromCharCode(90-nVariables+1+ pos);
    }else{
        r=String.fromCharCode(90-nVariables+1+ pos)+"~";
    }
    return r;
}

function imprimirResultado(arrResult) {
    console.table(arrResult);
    let resp = "";
    let variables="";
    for (let i = 0; i < arrResult.length; i++) {
        for (let j = 0; j < arrResult[i].bi.length; j++) {
            if (arrResult[i].bi[j]=="1") {
                resp = resp +"("+ obLetra(true,j)+") ";
            }else if (arrResult[i].bi[j]=="0") {
                resp = resp +"("+ obLetra(false,j)+") ";
            }
            
            
        }
        resp = resp+" + ";
    }
    resp = resp.substring(0, resp.length - 1);
    resp = resp.substring(0, resp.length - 1);

    console.log(resp);
    let respuesta = document.getElementById("resultado");

    for (let i = nVariables-1; i >= 0; i--) {
    
        variables= variables+String.fromCharCode(90-i)+",";
    }

    respuesta.innerHTML = "<div class='card text-bg-light mb-3' style='max-width: 18rem;''><div class='card-header'>Resultado</div><div class='card-body'><h5 class='card-title'>F("+variables+")= "+resp+"</h5></div></div><br><br>";
}

function repM(arr) {
    let arrResult = [];
    let arrOId=[];
    let obAux = new Object();
    let noRep = false;
    let noRepI= true;
    let auxI=[];
    obAux.index = 0;
    obAux.idr = arr[0].id[0];
    obAux.rep = 0;
    arrOId.push(obAux);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].id.length; j++) {
            for (let k = 0; k < arrOId.length; k++) {
                if (arr[i].id[j]== arrOId[k].idr) {
                    arrOId[k].rep=arrOId[k].rep +1;
                    noRep=false;
                    break;
                }else{
                    noRep = true;
                }
            }
            if (noRep) {
                obAux= new Object();
                obAux.index=i;
                obAux.idr=arr[i].id[j];
                obAux.rep=1;
                arrOId.push(obAux);  
                noRep=false;  
            }

            
            
        }
        
    }
    console.table(arrOId);
    for (let i = 0; i < arrOId.length; i++) {
        if (arrOId[i].rep==1 ) {
            for (let j = 0; j < auxI.length; j++) {
                if (arrOId[i].index == auxI[j]) {
                    noRepI = false;
                    break;
                }
            
            }
            if(noRepI){
                arrResult.push(arr[arrOId[i].index]);
                auxI.push(arrOId[i].index);
            }    
        }
        
        
        
    }
    imprimirResultado(arrResult);

}

function simpliR(arr) {
    
    arr.sort(((a, b) => a.unos - b.unos));
    console.table(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].id);
        
    }

    let arrAux=[];
    let biAux="";
    let dif=0;
    let objAux;
    let flag = true;
    
    for (let i = 0; i <arr.length ; i++) {
        for (let j = 0; j <arr.length ; j++) {
            if (arr[j].unos == arr[i].unos+1) {
                for (let k = 0; k < nVariables; k++) {
                    if (arr[i].bi[k]==arr[j].bi[k]) {
                        biAux=biAux+arr[i].bi[k];
                    }else{
                        biAux=biAux+"-";
                        dif++;
                    }
                    
                }
                if (dif==1 ) {
                    for (let z = 0; z < arrAux.length; z++) {
                        if (biAux == arrAux[z].bi) {
                            flag = false;
                        }
                        
                    }
                    if (flag) {
                        objAux = new Object();
                        objAux.id= arr[i].id; 
                        objAux.id= objAux.id.concat(arr[j].id);
                        objAux.bi = biAux;
                        objAux.unos= contarUnos(biAux);
                        arrAux.push(objAux);    
                    }
                    
                }
                biAux="";
                dif=0;
                flag=true;
            }
            
        }
        
    }
    if (arrAux.length==0) {
        console.table(arr);
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i].id);
            
        }
        repM(arr);

    }else{
        simpliR(arrAux);
    }
}

function generarTabla() {
    nVariables=document.getElementById("nVariables").value;
    let tabla =  document.getElementById("tabla");
    let cabeza =  document.getElementById("cabeza");
    let simp =  document.getElementById("simp");
    simp.innerHTML= "<button type='button' class='btn btn-primary' onclick='simplificar()'>Simplificar</button>";

    let texto="";
    let textoC="<th>m</th>";

    for (let i = nVariables-1; i >= 0; i--) {
        
        textoC= textoC+"<th>"+String.fromCharCode(90-i)+"</th>";
    }
    textoC=textoC+"<th>F</th>";
    cabeza.innerHTML=textoC;


    for (let i = 0; i < Math.pow(2, nVariables); i++) { /* 90 = Z*/
        texto = texto+ "<tr><th>"+i+"</th>";
        for (let j = 0; j < nVariables; j++) {
            texto= texto+"<th>"+convertToBinary1(i)[j]+"</th>";
            
        }
        texto=texto+"<th><div class='form-check'><input class='form-check-input' type='checkbox' id='"+i+"'></div></th>  </tr>";
    }
    tabla.innerHTML= texto;
}



/*for (let i = 0; i < 16; i++) {
    
    texto = texto+ "<tr><th>"+i+"</th>  <th>"+convertToBinary1(i)[0]+"</th> <th>"+convertToBinary1(i)[1]+"</th> <th>"+convertToBinary1(i)[2]+"</th> <th>"+convertToBinary1(i)[3]+"</th> <th><div class='form-check'><input class='form-check-input' type='checkbox' id='"+i+"'></div></th>  </tr>"
    
}*/


