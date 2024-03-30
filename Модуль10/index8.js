/*Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».*/

let map = new Map()
map.set('insect', 'butterfly')
map.set('num', '55')
map.set('car', 'porsche')
for (let key of map.keys()) {
console.log(key);}
for (let value of map.values()) {
console.log(value)}
for (const [key, value] of map) {
    console.log(`Ключ: ${key}, Значение: ${value}`)
}

/*map.forEach((value, key)=> {
    console.log(`Ключ:${key}, Значение:${value}`);
});*/
