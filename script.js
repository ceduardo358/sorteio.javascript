
//Aqui essa parte do codigo tem a função que cptura e escreve no documento
//os participantes do sorteio.
var arr = []
function clicar(){
 var capt = document.getElementById("dig").value;
 var subs=document.getElementById("tex").innerHTML
  subs =  subs+ " " +capt  ;  
  
   document.getElementById("tex").innerHTML =  subs
   arr.push(capt)
 console.log(subs)
  console.log(arr)
};

 /*Formula ramdom

 // *******Tentando rodar esse codigo*********

    /*document.addEventListener("keydown", function(event){
        var capt = document.getElementById("dig").value;
        document.getElementById("tex");
        if( event.Code === 13){
            subs=document.innerHTML;
            subs = subs + "<br/>" + capt;
            document.getElementById("tex").innerHTML =  subs;

        }else{
            console.log("Deu erro!")
        }
    })*/
/*function press(event){
        document.addEventListener("keydown", press);
           if (event.keyCode !== 13) {
            //var capt = document.getElementById("dig").value;
            //var subs=document.getElementById("tex").innerHTML;
        //subs = subs + "<br/>" + capt;
         console.log("Parte esta certo")
                // document.getElementById("tex").innerHTML = subs;
} else{
    console.log("Tem algo errado!")
}}; */
