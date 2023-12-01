// La moun lan ap ensere chenn karakte a
let chenKarakte = prompt("Antre chen karakte a : ");

//Fonksyon pou si moun lan pa antre anyen
while (!chenKarakte.trim()) {
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2");

    chenKarakte = prompt(" Tanpri eseye anko : ");
}

//Nou mete tout mo yo nan yon tablo e n separe yo 
let moTablo = chenKarakte.split(" ");
//Varyab k ap gen pou kenbe tout mo nou yo, le n fini an
let DevanDeyeMajiskil = "";

//Bouk sa ap pemet nou pran mo yo grenn pa grenn
for (let i = 0; i < moTablo.length; i++) {
    let mo = moTablo[i];
    let moTransforme = mo.substring(1) + mo.charAt(0);
    DevanDeyeMajiskil += moTransforme.toUpperCase() + " ";
}

//Affichaj mo yo
console.info(DevanDeyeMajiskil); 
