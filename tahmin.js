const tahminKelime = ["html","css","javascript"];
let hak= 3;

for (let i = 0; i<hak; i++){
    let tahmin = prompt("Front End developerin bilmesi gereken kod tiplerinden birisi nedir?");

if(tahminKelime.includes(tahmin)){
    alert("Doğru Bildin. Tebrikler!");
    break;
}
else{
    alert("Yanlış Kelime Girdiniz. Tekrar Deneyin.");
    if (i === hak - 1){
        alert("Hakkın Bitti. Oyunu Kaybettin!!!");
    }
    else{
        alert("Yanlış Tahmin ettin. Kalan Hakkın " + (hak - i - 1));
    }
}
}