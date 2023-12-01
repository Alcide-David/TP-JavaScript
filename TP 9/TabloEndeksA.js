
//Ensesyon chen lan
let chenKarakte =  prompt("Antre chen karakte a : ");

while(!chenKarakte.trim() ){
    console.info("| ERE | -- > Rezon : ");
    console.info(" -> Ou pa antre anyen");
    console.info(" -> Pa gen espas nan chen yo.");
    console.info("    --> egz : Mo1 Mo2")

    chenKarakte = prompt(" Tanpri eseye anko : ")
}

let endeksA=[];
let test = false;

for (let i = 0; i < chenKarakte.length; i++) {
    if (chenKarakte[i] === "a") {
        endeksA[endeksA.length] = i;
        test= true;
    }
}

// Kondisyon pou si pat gen okenn mo ki gen a e afiche chanjman
if (test === true) {
    console.info("Sa se chen lan : "+ chenKarakte);
    console.info("Tablo endeks [ a ] se  : ");
    console.info(endeksA)
} else {
    console.info("Pat gen okenn mo ki gen 'a' na sa w te mete yo");
}