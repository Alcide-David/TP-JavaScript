//Emsesyon chen karakte a 
let chenKarakte = prompt("Antre chen karakte a : ")

//Pou n teste si sa moun lan antre a gen espas poswa si l pa antre anyen
while(!chenKarakte.trim() || chenKarakte !== chenKarakte.toLowerCase() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info(" -> Gen let ki an majiskil");
    console.info("    --> egz : mo1 mo2 mo3")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

//La n met tout mo yo nan on tablo
let tabloKarakte = chenKarakte.split(" ");

//Ak fonksyon sa n ap pran mo yo grenn pa grenn, d
for (let i = 0; i < tabloKarakte.length; i++) {
    // Pran premye lèt nan chak mo ak fè l tounen majiskil 
    tabloKarakte[i] = tabloKarakte[i].charAt(0).toUpperCase() + tabloKarakte[i].slice(1);
}

//Afiche tablo a
console.info(tabloKarakte);
