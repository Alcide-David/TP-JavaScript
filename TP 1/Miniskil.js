//Emsesyon mo a pa itilizate a
let moMajiskil = prompt("Antre mo majiskil lan ou ta vle fe miniskil : ")

//N ap teste si mo a vreman an Manjiskil 
while(moMajiskil !== moMajiskil.toUpperCase() ){
    console.info(" ERE : Yon let oswa mo a pat an majiskil")
    moMajiskil = prompt(" Mo w t antre a oswa yon let ladan pat an Majiskil, eseye anko : ")
}
let moMiniskil = moMajiskil.toLowerCase();

console.info("Chanjman tout karaktè yo an miniskil : " + moMiniskil);