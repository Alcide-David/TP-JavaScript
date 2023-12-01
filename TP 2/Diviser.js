//Emsesyon chen karakte a 
let chenKarakte = prompt("Antre chen karakte a : ")

//Pou n teste si sa moun lan antre a gen espas poswa si l pa antre anyen
while(!chenKarakte.trim()){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz :Ayibobo Ayibobo")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

//La n met sa moun lan antre a nan on tablo
let tabloKarakte = chenKarakte.split(" ");

//Afiche tablo a
console.info(tabloKarakte);
