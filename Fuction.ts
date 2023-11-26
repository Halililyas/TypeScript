// Normal Bir Js DE bu şekide foksiyon tanımlanır 
function topla(x, y) {
    return x + y
}
function topla2(x: number, y: number): number { // TypeScript Bu ise Bana X ve y Number türünde olacak ve topla2 foksiyonu number değer döncürmeli

    return x + y
}
// Ani Foksiyon tanımı 

let topla3 = function(x:number,y:number):number{
    return x+y
}
//kullanımları 
console.log(topla("a",2))
console.log(topla2(2,2))
console.log(topla3(3,2))

// Foksiyonlarda Default değeri verme 
//örn1
function topla4(x: number, y: number=4): number { // TypeScript Bu ise Bana X ve y Number türünde olacak ve topla2 foksiyonu number değer döncürmeli

    return x + y
}
console.log(topla4(2))

//örn2
function topla5(x: number, y?: number): number { // TypeScript Bu ise Bana X ve y Number türünde olacak ve topla2 foksiyonu number değer döncürmeli
    if(y){ // Yukarıda dikkatli Bir Şekilde İzlediğimizde Girilicek olan Y değeri Boş Olabilir 
        return x + y // Burda İf Kontrolu yaparak y değeri Doluysa demiş olduk  Kod blogu Çalısacak
    }
    return x;
   
}
console.log(topla5(2))
console.log(topla5(2,40))

// Fuctionlarda Parametre ler 
function Davetliler(ilkdavetli:string, ...Sondavetli:string[]):string{
    return ilkdavetli + " " + Sondavetli.join(" ")// Her gelecek olan kişiyle arasında boşluk bıraak 

}
console.log(Davetliler("Engin","Halil","Zehra","Sümmeyye"))
