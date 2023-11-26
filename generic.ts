// Generic Anlamak Kullanmak Tip Güvenliğini Sağlamak 

//örn 
function deger(x:number):number{ // Dikkat et  "deger(x:number)" Burda x Değeri number olucağını garantiledik ":number" burda ise dönüş tipinin number olduğunu belirledik
    return x;
}

let sayi = deger(10) // Buraya string bir değer Veremezssin Hata alırsın
console.log(sayi)

// Örn2
function deger2(x:string):string{
    return x; // Noktalı virgul zorunlu değil bu arada
}
let sehir = deger2("Rize") // Buraya number bir değer Veremezssin Hata alırsın
console.log(sehir)

// Örn3
function deger3<T>(x:T):T{// Burda Senin Kulanan kimse Bana Değer Yollarken Veri Tipinide Belirtsin Demiş olduk kısaca
    return x;
}
let sayı1 = deger3<number>(2) // Burda Değerini Belirttik
let Sehir2 = deger3<string>("Ankara")

console.log(sayı1)
console.log(Sehir2)

// Classlarda Generic 

class GenecirClass<T>{
    degisken:T // 
    foksiyon(parametre:T):T{
        return parametre
    }

}
let sinif = new GenecirClass<string>()
sinif.foksiyon("Ankara") // Burda String Verme sebebimiz Yukarıda Generic classa String İfade Yolluyacağımızı belirttik int belirtseydik int yollardık