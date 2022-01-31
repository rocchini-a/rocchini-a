"use strict";

var col1 = 1;
var col2 = 7;
var col3 = 13;
var col4 = 19;
var col5 = 25;
var col6 = 31;
var col7 = 37;
var colore ="";
var clic = 0;
var giocatore= true;
var giocoFinito = false;
function inserimento(col){
    //prima colonna
    if(!giocoFinito){  
        clic ++;
if (giocatore == true){
    if(col == 1){
        if(col1<7){
            if(document.getElementById(col1).style.backgroundColor != "red" && document.getElementById(col1).style.backgroundColor != "yellow" ){
            document.getElementById(col1).style.backgroundColor = "red";
            col1++;
            giocatore = false;
            colore = "red";
            document.getElementById('messaggio').innerHTML = "turno giocatore giallo" ;
          }
        }
    }
    //seconda colonna
    if(col == 2){
        if(col2<13){
            if(document.getElementById(col2).style.backgroundColor != "red" && document.getElementById(col2).style.backgroundColor != "yellow" ){
            document.getElementById(col2).style.backgroundColor = "red";
            col2++;
            giocatore = false;
            colore = "red";
            document.getElementById('messaggio').innerHTML = "turno giocatore giallo" ;
            }
        }
    }
    //terza colonna
    if(col == 3){
        if(col3<19){
            if(document.getElementById(col3).style.backgroundColor != "red" && document.getElementById(col3).style.backgroundColor != "yellow" ){
            document.getElementById(col3).style.backgroundColor = "red";
            col3++;
            giocatore = false;
            colore = "red";
            document.getElementById('messaggio').innerHTML = "turno giocatore giallo" ;
            }
        }
    }
    //quarta colonna
    if(col == 4){
        if(col4<25){
            if(document.getElementById(col4).style.backgroundColor != "red" && document.getElementById(col4).style.backgroundColor != "yellow" ){
            document.getElementById(col4).style.backgroundColor = "red";
            col4++;
            giocatore= false;
            colore = "red";
            document.getElementById('messaggio').innerHTML = "turno giocatore giallo" ;
            }
        }
    }
    //quinta colonna
    if(col == 5){
        if(col5<31){
            if(document.getElementById(col5).style.backgroundColor != "red" && document.getElementById(col5).style.backgroundColor != "yellow" ){
            document.getElementById(col5).style.backgroundColor = "red";
            col5++;
            giocatore=false;
            colore = "red";
            document.getElementById('messaggio').innerHTML = "turno giocatore giallo" ;
            }
        }
    }
    //sesta colonna
    if(col == 6){
        if(col6<37){
            if(document.getElementById(col6).style.backgroundColor != "red" && document.getElementById(col6).style.backgroundColor != "yellow" ){
            document.getElementById(col6).style.backgroundColor = "red";
            col6++;
            giocatore=false;
            colore = "red";
            document.getElementById('messaggio').innerHTML = "turno giocatore giallo" ;
            }
        }
    }
    //settima colonna
    if(col == 7){
        if(col7<43){
            if(document.getElementById(col7).style.backgroundColor != "red" && document.getElementById(col7).style.backgroundColor != "yellow" ){
            document.getElementById(col7).style.backgroundColor = "red";
            col7++;
            giocatore=false;
            colore = "red";
            document.getElementById('messaggio').innerHTML = "turno giocatore giallo" ;
            }
        }
    }

    


     }else if(giocatore== false){
        //secondo giocatore
    //prima colonna
        if(col == 1){
            if(col1<7){
                if(document.getElementById(col1).style.backgroundColor != "red" && document.getElementById(col1).style.backgroundColor != "yellow" ){
                document.getElementById(col1).style.backgroundColor = "yellow";
                col1++;
                giocatore = true;
                colore = "yellow";
                document.getElementById('messaggio').innerHTML = "turno giocatore rosso" ;
              }
            }
        }
        //seconda colonna
        if(col == 2){
            if(col2<13){
                if(document.getElementById(col2).style.backgroundColor != "red" && document.getElementById(col2).style.backgroundColor != "yellow" ){
                document.getElementById(col2).style.backgroundColor = "yellow";
                col2++;
                giocatore = true;
                colore = "yellow";
                document.getElementById('messaggio').innerHTML = "turno giocatore rosso" ;
                }
            }
        }
        //terza colonna
        if(col == 3){
            if(col3<19){
                if(document.getElementById(col3).style.backgroundColor != "red" && document.getElementById(col3).style.backgroundColor != "yellow" ){
                document.getElementById(col3).style.backgroundColor = "yellow";
                col3++;
                giocatore = true;
                colore = "yellow";
                document.getElementById('messaggio').innerHTML = "turno giocatore rosso" ;
                }
            }
        }
        //quarta colonna
        if(col == 4){
            if(col4<25){
                if(document.getElementById(col4).style.backgroundColor != "red" && document.getElementById(col4).style.backgroundColor != "yellow" ){
                document.getElementById(col4).style.backgroundColor = "yellow";
                col4++;
                giocatore= true;
                colore = "yellow";
                document.getElementById('messaggio').innerHTML = "turno giocatore rosso" ;
                }
            }
        }
        //quinta colonna
        if(col == 5){
            if(col5<31){
                if(document.getElementById(col5).style.backgroundColor != "red" && document.getElementById(col5).style.backgroundColor != "yellow" ){
                document.getElementById(col5).style.backgroundColor = "yellow";
                col5++;
                giocatore=true;
                colore = "yellow";
                document.getElementById('messaggio').innerHTML = "turno giocatore rosso" ;
                }
            }
        }
        //sesta colonna
        if(col == 6){
            if(col6<37){
                if(document.getElementById(col6).style.backgroundColor != "red" && document.getElementById(col6).style.backgroundColor != "yellow" ){
                document.getElementById(col6).style.backgroundColor = "yellow";
                col6++;
                giocatore=true;
                colore = "yellow";
                document.getElementById('messaggio').innerHTML = "turno giocatore rosso" ;
                }
            }
        }
        //settima colonna
        if(col == 7){
            if(col7<43){
                if(document.getElementById(col7).style.backgroundColor != "red" && document.getElementById(col7).style.backgroundColor != "yellow" ){
                document.getElementById(col7).style.backgroundColor = "yellow";
                col7++;
                giocatore=true;
                colore = "yellow";
                document.getElementById('messaggio').innerHTML = "turno giocatore rosso" ;
                }
            }
        }
     }
        vittoria(colore);
    }
}

function reset(){
    for(var i =1; i<43; i++){

        document.getElementById(i).style.backgroundColor = "white";

    }
    col1 = 1;
    col2 = 7;
    col3 = 13;
    col4 = 19;
    col5 = 25;
    col6 = 31;
    col7 = 37;
    clic = 0;
    giocoFinito = false;
}

function vittoria(colore){

// colonne 
    //1
    if(document.getElementById('1').style.backgroundColor== colore && document.getElementById('2').style.backgroundColor== colore && document.getElementById('3').style.backgroundColor== colore && document.getElementById('4').style.backgroundColor== colore){
        giocoFinito= true;
     if(colore == "red"){
        document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
        }
     if(colore == "yellow"){
        document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
        }
     //2
    if(document.getElementById('5').style.backgroundColor== colore && document.getElementById('2').style.backgroundColor== colore && document.getElementById('3').style.backgroundColor== colore && document.getElementById('4').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //3
    if(document.getElementById('5').style.backgroundColor== colore && document.getElementById('6').style.backgroundColor== colore && document.getElementById('3').style.backgroundColor== colore && document.getElementById('4').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //4
    if(document.getElementById('7').style.backgroundColor== colore && document.getElementById('8').style.backgroundColor== colore && document.getElementById('9').style.backgroundColor== colore && document.getElementById('10').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //5
    if(document.getElementById('8').style.backgroundColor== colore && document.getElementById('9').style.backgroundColor== colore && document.getElementById('10').style.backgroundColor== colore && document.getElementById('11').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //6
    if(document.getElementById('9').style.backgroundColor== colore && document.getElementById('12').style.backgroundColor== colore && document.getElementById('10').style.backgroundColor== colore && document.getElementById('11').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //7
    if(document.getElementById('15').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('13').style.backgroundColor== colore && document.getElementById('14').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //8
    if(document.getElementById('15').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('17').style.backgroundColor== colore && document.getElementById('14').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //9
    if(document.getElementById('16').style.backgroundColor== colore && document.getElementById('17').style.backgroundColor== colore && document.getElementById('18').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //10
    if(document.getElementById('19').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //11
     if(document.getElementById('23').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //12
     if(document.getElementById('23').style.backgroundColor== colore && document.getElementById('24').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //13
     if(document.getElementById('25').style.backgroundColor== colore && document.getElementById('26').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore && document.getElementById('28').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //14
     if(document.getElementById('26').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore && document.getElementById('28').style.backgroundColor== colore && document.getElementById('29').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //15
     if(document.getElementById('27').style.backgroundColor== colore && document.getElementById('28').style.backgroundColor== colore && document.getElementById('29').style.backgroundColor== colore && document.getElementById('30').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //16
     if(document.getElementById('31').style.backgroundColor== colore && document.getElementById('32').style.backgroundColor== colore && document.getElementById('33').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //17
     if(document.getElementById('32').style.backgroundColor== colore && document.getElementById('33').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore && document.getElementById('35').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //18
     if(document.getElementById('33').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore && document.getElementById('35').style.backgroundColor== colore && document.getElementById('36').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //19
     if(document.getElementById('37').style.backgroundColor== colore && document.getElementById('38').style.backgroundColor== colore && document.getElementById('39').style.backgroundColor== colore && document.getElementById('40').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //20
     if(document.getElementById('39').style.backgroundColor== colore && document.getElementById('38').style.backgroundColor== colore && document.getElementById('40').style.backgroundColor== colore && document.getElementById('41').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //21
     if(document.getElementById('39').style.backgroundColor== colore && document.getElementById('40').style.backgroundColor== colore && document.getElementById('41').style.backgroundColor== colore && document.getElementById('42').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
//righe
    // 22
     if(document.getElementById('1').style.backgroundColor== colore && document.getElementById('7').style.backgroundColor== colore && document.getElementById('13').style.backgroundColor== colore && document.getElementById('19').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //23
     if(document.getElementById('19').style.backgroundColor== colore && document.getElementById('13').style.backgroundColor== colore && document.getElementById('7').style.backgroundColor== colore && document.getElementById('25').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //24
     if(document.getElementById('13').style.backgroundColor== colore && document.getElementById('19').style.backgroundColor== colore && document.getElementById('25').style.backgroundColor== colore && document.getElementById('31').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //25
     if(document.getElementById('19').style.backgroundColor== colore && document.getElementById('25').style.backgroundColor== colore && document.getElementById('31').style.backgroundColor== colore && document.getElementById('37').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //26
     if(document.getElementById('2').style.backgroundColor== colore && document.getElementById('8').style.backgroundColor== colore && document.getElementById('14').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //27
    if(document.getElementById('8').style.backgroundColor== colore && document.getElementById('14').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore && document.getElementById('26').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
        document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
        }
        if(colore == "yellow"){
        document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //28
     if(document.getElementById('14').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore && document.getElementById('26').style.backgroundColor== colore && document.getElementById('32').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //29
     if(document.getElementById('20').style.backgroundColor== colore && document.getElementById('26').style.backgroundColor== colore && document.getElementById('32').style.backgroundColor== colore && document.getElementById('38').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //30
     if(document.getElementById('3').style.backgroundColor== colore && document.getElementById('9').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //31
     if(document.getElementById('9').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //32
     if(document.getElementById('15').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('33').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //33
     if(document.getElementById('27').style.backgroundColor== colore && document.getElementById('33').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('39').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //34
     if(document.getElementById('4').style.backgroundColor== colore && document.getElementById('10').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
      //35
      if(document.getElementById('28').style.backgroundColor== colore && document.getElementById('10').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
      //36
      if(document.getElementById('28').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
      //37
      if(document.getElementById('28').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore && document.getElementById('40').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //38
      if(document.getElementById('5').style.backgroundColor== colore && document.getElementById('11').style.backgroundColor== colore && document.getElementById('17').style.backgroundColor== colore && document.getElementById('23').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //39
    if(document.getElementById('29').style.backgroundColor== colore && document.getElementById('11').style.backgroundColor== colore && document.getElementById('17').style.backgroundColor== colore && document.getElementById('23').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //40
    if(document.getElementById('29').style.backgroundColor== colore && document.getElementById('35').style.backgroundColor== colore && document.getElementById('17').style.backgroundColor== colore && document.getElementById('23').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //41
    if(document.getElementById('29').style.backgroundColor== colore && document.getElementById('35').style.backgroundColor== colore && document.getElementById('41').style.backgroundColor== colore && document.getElementById('23').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //42
    if(document.getElementById('6').style.backgroundColor== colore && document.getElementById('12').style.backgroundColor== colore && document.getElementById('18').style.backgroundColor== colore && document.getElementById('24').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //43
     if(document.getElementById('30').style.backgroundColor== colore && document.getElementById('12').style.backgroundColor== colore && document.getElementById('18').style.backgroundColor== colore && document.getElementById('24').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //44
     if(document.getElementById('30').style.backgroundColor== colore && document.getElementById('36').style.backgroundColor== colore && document.getElementById('18').style.backgroundColor== colore && document.getElementById('24').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //45
     if(document.getElementById('30').style.backgroundColor== colore && document.getElementById('36').style.backgroundColor== colore && document.getElementById('42').style.backgroundColor== colore && document.getElementById('24').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //diagonali
     //46
     if(document.getElementById('4').style.backgroundColor== colore && document.getElementById('9').style.backgroundColor== colore && document.getElementById('14').style.backgroundColor== colore && document.getElementById('19').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //47
     if(document.getElementById('5').style.backgroundColor== colore && document.getElementById('10').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //48
     if(document.getElementById('10').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore && document.getElementById('25').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //49
     if(document.getElementById('6').style.backgroundColor== colore && document.getElementById('11').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //50
     if(document.getElementById('16').style.backgroundColor== colore && document.getElementById('11').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('26').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //51
     if(document.getElementById('16').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore && document.getElementById('26').style.backgroundColor== colore && document.getElementById('31').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //52
     if(document.getElementById('17').style.backgroundColor== colore && document.getElementById('12').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //53
     if(document.getElementById('17').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore && document.getElementById('32').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //54
     if(document.getElementById('22').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore && document.getElementById('32').style.backgroundColor== colore && document.getElementById('37').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //55
     if(document.getElementById('18').style.backgroundColor== colore && document.getElementById('23').style.backgroundColor== colore && document.getElementById('28').style.backgroundColor== colore && document.getElementById('33').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //56
     if(document.getElementById('23').style.backgroundColor== colore && document.getElementById('28').style.backgroundColor== colore && document.getElementById('33').style.backgroundColor== colore && document.getElementById('38').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //57
     if(document.getElementById('24').style.backgroundColor== colore && document.getElementById('29').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore && document.getElementById('39').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //58
     if(document.getElementById('3').style.backgroundColor== colore && document.getElementById('10').style.backgroundColor== colore && document.getElementById('17').style.backgroundColor== colore && document.getElementById('24').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //59
     if(document.getElementById('2').style.backgroundColor== colore && document.getElementById('9').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('23').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //60
     if(document.getElementById('9').style.backgroundColor== colore && document.getElementById('16').style.backgroundColor== colore && document.getElementById('23').style.backgroundColor== colore && document.getElementById('30').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //61
     if(document.getElementById('1').style.backgroundColor== colore && document.getElementById('8').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //62
     if(document.getElementById('29').style.backgroundColor== colore && document.getElementById('8').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //63
     if(document.getElementById('29').style.backgroundColor== colore && document.getElementById('36').style.backgroundColor== colore && document.getElementById('15').style.backgroundColor== colore && document.getElementById('22').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //64
     if(document.getElementById('28').style.backgroundColor== colore && document.getElementById('7').style.backgroundColor== colore && document.getElementById('14').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //65
     if(document.getElementById('28').style.backgroundColor== colore && document.getElementById('35').style.backgroundColor== colore && document.getElementById('14').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //66
     if(document.getElementById('28').style.backgroundColor== colore && document.getElementById('35').style.backgroundColor== colore && document.getElementById('42').style.backgroundColor== colore && document.getElementById('21').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
     //67
     if(document.getElementById('13').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //68
    if(document.getElementById('41').style.backgroundColor== colore && document.getElementById('20').style.backgroundColor== colore && document.getElementById('27').style.backgroundColor== colore && document.getElementById('34').style.backgroundColor== colore){
        giocoFinito= true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    //69
    if(document.getElementById('19').style.backgroundColor== colore && document.getElementById('26').style.backgroundColor== colore && document.getElementById('33').style.backgroundColor== colore && document.getElementById('40').style.backgroundColor== colore){
        giocoFinito = true;
        if(colore == "red"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore rosso";
         }
        if(colore == "yellow"){
         document.getElementById('messaggio').innerHTML = "ha vinto il giocatore giallo";
        }
    }
    
    if(clic == 42 ){

        pareggio();
    }
}
function pareggio(){

    document.getElementById('messaggio').innerHTML = "pareggio " ;
    
    }

