function count1(nr1, nr2) {
    let addition = nr1 + nr2;
    if (addition < 0) {
        console.log('Wynik dodawania jest nieprawidłowy!')
    } else {
        console.log('Wynik dodawania to ' + addition + " !");
    }
    let sub = nr1 - nr2;
    if (sub < 0) {
        console.log('Wynik  odejmowania jest nieprawidłowy!')
    } else {
        console.log('Wynik odejmowania to ' + sub + " !");
    }
    let multipli = nr1 * nr2;
    if (multipli < 0) {
        console.log('Wynik mnożenia  jest nieprawidłowy!')
    } else {
        console.log('Wynik mnożenia to ' + multipli + ' !')
    }
}
console.log(count1(2, 5));