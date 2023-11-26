function selamver(Isim:string){
    return "Merhaba " + Isim 
}

let  message = selamver('halil')

console.log(message)

/// Veri Tipleri Number - string 

// Örn1
let sayı : number = 20 // Buşekilde Değişken Tanımlanır ve İçerisine alıcak Veri Tipini Bu şekilde yazılır
sayı = 10
//Örn2
let Sehir : string = "Elezığ"
Sehir = "Ankara"
//Örn3 
let DogruMu :boolean = false
DogruMu = false
DogruMu = true

//Örn4 
let sayılar : Number[] = [1,2,3,4,5] // dizini içerisine sadece numara alır 

// Örn5
let sayılar2 : Array<Number>=[1,2,3,4,5,67,]

// Örn6 
let sayıalr3 : [number,string] = [1,"Adana"]
sayıalr3[0]
sayıalr3[1]
//Örn7
enum Renk  {Kirmizi=1,Siyah,Beyaz}
let renk : Renk.Kirmizi // Dikkatli Bak : Var "=" Yok Budurumda lent renk veri Tipi Burda Renk. Kırmızısı Değerinde Olması Lazım  
renk = 1

//Veri Tiplerinde Ders 2 Any- Void Yapıları
// Any Bize gelicek olan verinin tipini Ne olduğuna emin olmadığımızdan zamanlarda kullanılır 
//Örn1
let deger : any
deger = "Ankara"
deger = 2 
deger = {}
// Void Genelde foksiyonlarda geriye değer döndürmemek için kullanılır 
//örn2 
function selamvemek():void{
    console.log("Merhaba ") // Return Kullandırmaz 
}