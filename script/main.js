function count1(nr1, nr2) {
    let addition = nr1 + nr2;
    if (addition < 0) {
        console.log('Wynik dodawania jest nieprawidłowy!');
        //return addition;
    } else {
        console.log('Wynik dodawania to ' + addition + " !");
    }

    let sub = nr1 - nr2;
    if (sub < 0) {
        console.log('Wynik  odejmowania jest nieprawidłowy!');
        // return sub;
    } else {
        console.log('Wynik odejmowania to ' + sub + " !");

    }

    let multipli = nr1 * nr2;
    if (multipli < 0) {
        console.log('Wynik mnożenia  jest nieprawidłowy!');
        //return multipli;
    } else {
        console.log('Wynik mnożenia to ' + multipli + ' !');
    }
}

console.log(count1(15, 22));
count1(56,88)

