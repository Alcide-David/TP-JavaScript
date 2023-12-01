//Ensesyon chen karakte a 
let chenKarakte = prompt("Antre chen karakte a : ")

while(!chenKarakte.trim() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

// La nou ap ranplase tout "a" pa "@"
let NouvoChen = chenKarakte.replace(/a/g, "@");

// Kondisyon pou si pat gen okenn mo ki gen a e afiche chanjman
if (NouvoChen !== chenKarakte) {
    console.log("Chanjman fèt: " + NouvoChen);
} else {
    console.log("Pat gen okenn mo ki gen 'a' na sa w te mete yo");
}