//Ensesyon chenn karakte a
let chennKarakte = prompt("Antre chen karakte a : ");
//Varyab sa ap kenbe tout chenn yo san espas
let chennSanEspas = "";
// Varyab sa ap enkremante 
let kantiteKarakte=0;

//Fonksyon pou teste si moun lan pa antre anyen
while(!chennKarakte.trim() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2")

    chennKarakte = prompt(" Tanpri eseye anko : ")
}

//Bouk k ap retire espas nan chenn lan e afekte vale yo a varyab chennSanEspas 
for (let i = 0; i < chennKarakte.length; i++) {
    if (chennKarakte[i] !== " ") {
        chennSanEspas += chennKarakte[i];
        kantiteKarakte++;
    }
}

//Nou konkatene chenn lan ak kantite karaktè li genyen
let chennFinal = chennSanEspas + kantiteKarakte;
//Affichagwe chenn lan
console.info(chennFinal);
