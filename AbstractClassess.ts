// Abstract Classın Kullanımı 
abstract class KrediBase {
    constructor() {
        
    }
    Kaydet():void{// Burda Void Yazmasak ta olurdu Yazılım Kuralları Dahilinde Yazım Tekniği Düzgün olsun Diye yazıldı
        console.log("Kaydedildi")// Bu Metod İse Gövde Kısmı Tamamlanmış Ve bu sınıf miras Edildiği Zaman Kullanılması Zorunlu değildir C# la Aynı Özelliğe Sahip 
    }
    abstract Hesapla():void;// Burda Tamamlanmamış Bir metod var bu metot bu sınıf başka bir sınıfta miras alınır sa Yaılan Abstrack metodu kullanılıması zorunludur
}
class TuketiciKradi extends KrediBase{
    // constructor(){
    //     super();
    // }
    Hesapla(): void {
        console.log("Tüketici krediye göre Hesap Edildi ")
    }

}

class MortgageKradi extends KrediBase{
    // constructor(){ // Eskiden Bir Abstrack Sınıf miras Edildiğinde İçerisinde Super() parametresi Yazılırmıs şimdi ise Gerek yok 
    //     super();
    // }
    Hesapla(): void {
        console.log("Mortgage krediye göre Hesap Edildi ")
    }
    kendineaitmetot():void{
        console.log("Ben Mortgageye Ait Bir Classım ")
    }

}

let tuketicikredi = new TuketiciKradi()
tuketicikredi.Hesapla()
tuketicikredi.Kaydet()// Miras Alınan Sınıf Kredi Base 

let mortgagekredi = new MortgageKradi();
mortgagekredi.Hesapla()
mortgagekredi.Kaydet()
mortgagekredi.kendineaitmetot()// Kendine Özgü metod başka sınıflar Görmezssiniz

let Kredi : KrediBase
Kredi = new TuketiciKradi()
Kredi = new MortgageKradi()
