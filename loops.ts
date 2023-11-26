// Typscript Döngüler
let sehirler = ["Ankara","Van","Rize","İstanbul"]

for(let item in  sehirler){
    console.log(item) // burda dikkat Edilmesi Gereken (in) Kullanımı burda dizi içerisinde bulunan değerlerin index sini verir Ekran çıktısı Sadece İndex numaraları olur(0,1,2,3,4)

}
for(let item of sehirler){// burda dikkat Edilmesi Gereken (of) Kullanımı burda dizi içerisinde bulunan değerlerin Direk Value sini verir Ekran çıktısı Sadece VAlue olur yani (Ankara, İStanbul ,rize Gibi)
    console.log(item)
}