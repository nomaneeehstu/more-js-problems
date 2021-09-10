const phones = [
    {BrandName: 'Xiaomi Redmi 9', Price: 18000, Camera: '16 mp', Storage : '64 GB'},
    {BrandName: 'Walton Primo S7', Price: 16000, Camera: '18 mp', Storage : '64 GB'},
    {BrandName: 'Realme 5i', Price: 15000, Camera: '10 mp', Storage : '32 GB'},
    {BrandName: 'Oppo F1', Price: 22000, Camera: '20 mp', Storage : '128 GB'},
    {BrandName: 'iPhone', Price: 88000, Camera: '56 mp', Storage : '256 GB'},
    {BrandName: 'Vivo Y20s', Price: 14000, Camera: '8 mp', Storage : '32 GB'},
    {BrandName: 'One Plus', Price: 56000, Camera: '46 mp', Storage : '128 GB'}
]

let cheapest = phones[0];

for(const phone of phones){
    if(phone.Price < cheapest.Price){
        cheapest = phone;
    }
}

console.log(cheapest);