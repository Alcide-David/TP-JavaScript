//Emsesyon chen karakte a 
let chenKarakte = prompt("Antre chen karakte a : ")

//Pou n teste si sa moun lan antre a gen espas poswa si l pa antre anyen
while(!chenKarakte.trim() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

//La n met tout mo yo nan on tablo
let tabloKarakte = chenKarakte.split(" ");
//Varyab k ap kenbe tout inisyal yo
let AnsanmInisyal = "";
let i=0;

//Fonksyon sa ap pakouri tablo a e pran premye let nan chak mo yo
while(i < tabloKarakte.length){
    // Pran premye lèt nan chak mo
    let inisyal = tabloKarakte[i].charAt(0);
    // Ajoute inisyal la ak yon espas nan varyab la
    AnsanmInisyal += inisyal + " ";
    i++
}

//N ap ajoute mo yo nan TabloInistyal e an menm tan separe et retire espas yo nan fen a komansman
let TabloInisyal = AnsanmInisyal.trim().split(" ");

//N ap afiche inisyal yo
console.info(" Sa w te ensere yo : [ " + chenKarakte + "]");
console.info(" Nouvo chen lan se : ");
console.info(TabloInisyal);
