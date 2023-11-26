class Ev {
     _odaSayısı :number
    private _pencereSayısı:number
    private _kat:number
    constructor(odaSayısı:number,pencereSayısı:number,kat:number){
        this._odaSayısı = odaSayısı
        this._pencereSayısı = pencereSayısı
        this._kat = kat
    }
    yemekYe(){
        console.log(this._kat + " Katlı evde Yemek yiyildi")
    }
}

let ev  = new Ev(15,25,26)
ev.yemekYe()
console.log(ev._odaSayısı)

//------------------------------------------------------------------------------------------------------
/// INHERITANCE MİRAS ALMA 

class Kişi{
    /// Get Set İşlemleri Encapsul işlemleri
    private _isim:string
    // 
    get isim():string{
        return "Sayın :" +  this._isim
    }
    set isim(ad:string){
        this._isim = ad
    }
    // Get Ve Set İşlemleri Yukarıda 
kaydet(){
    console.log("Kişi Kaydedildi.")
}
}
class Musteri extends Kişi{
    SatısYap(){
        console.log("Satış Yapıldı.")
    }
}
class Personel extends Kişi{
    OdemeYap(){
        console.log("Odeme Yapıldı ")
    }
}
let musteri = new Musteri()
musteri.isim="Halil"
console.log(musteri.isim)
musteri.SatısYap()
musteri.kaydet() // Kişiden Miras Edildi 

let personel = new Personel()
personel.OdemeYap()
personel.kaydet() // Kişi Sınıfından Miras Alındı 


