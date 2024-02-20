let wyraz = ['mezzotint', 'as']; //'świeżutki', 'ślimaczy', 'źródlany', 'jesse', 'akcesoria', 'brzęczący', 'ganglion', 'rocznie', 'rocznie', 'mezzotint', 'bomba', 'określanie', 'sytuacja', 'dysocjacja', 'furia', 'leżak', 'równoboczny', 'czytanie', 'porywczość', 'sarny', 'przeznaczenie', 'naftalen', 'tyran', 'zadatek', 'przechylenie', 'rura', 'przychód', 'wiza', 'nasiona', 'próbowanie', 'traper', 'wodospad', 'defetystyczny', 'fotostat', 'dezyderat', 'rafakoralowa', 'epikurejczyk', 'szybowiec', 'fanfara', 'szybowiec', 'solarium', 'lambrekin', 'kleik', 'porównanie', 'maskotka', 'kłopot', 'łania', 'niewolnictwo', 'teraz', 'rubryka'];

let iloscWyrazow = wyraz.length;


export let randomWyraz;
let randomInt = Math.floor(Math.random() * iloscWyrazow)

// randomowy wyraz
export function getWyraz(){
randomWyraz = wyraz[randomInt];
};

