// İnterface Kullanımı 

interface Product {
    name: string
    id: number
    unitPrice: number
}

function save(product: Product): void {
    console.log(product.name + " Kaydedildi")
}

save({ name: "laptop", id: 1, unitPrice: 1000 }) // abstract taki tek farkı sadece interfacenin içerisine tamamlanmamış metot yada özellik yazılır

class Product2 {// Normal Bir Class İçerisine tanıtılmış özellikler
    name: string
    id: number
    unitPrice: number
}
function save2(product2: Product2): void {
    console.log(product2.name + " Kaydedildi")
}
let maous = new Product2()
maous.name = "Atach"
save2(maous)// Bütün özellikleri Vermemize Gerek Kalmadı Bu şekilde



/// Örnek 2 
interface IProductService {
    save();// Gövdesi Tamamlanmaış metotlar burda var 
    Delete();
    Update();
}
class Urun implements IProductService { // İnterface içinde Bulunan Bütün metot ve özellikleri implamente etmen zorunludur 
    save() {
        throw new Error("Method not implemented.")
    }
    Delete() {
        throw new Error("Method not implemented.")
    }
    Update() {
        throw new Error("Method not implemented.")
    }

}