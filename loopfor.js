//forEach
var a = [10,20,30,40,50,60];

console.log("for()");
for(let valor of a){
    console.log(valor);
}

console.log("forEach()")
a.forEach(valor => console.log(valor));


console.log("forEach() SOMA VALORES")
tot = 0;
a.forEach(valor => {
    tot += valor;
});

console.log(tot);


a.forEach(function(valor, indice, array){
    console.log(array[indice]);
})

var carro = [{modelo: 'Audi A3' , marca: 'Audi' , ano: 2020},
             {modelo: 'Compass' , marca: 'Jeep' , ano: 2022}

]

for(let caracteristica in carro){
    console.log(carro[caracteristica].ano);
}

for(let c of carro){
    console.log(c.modelo);
}

var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}

var t = 1;
do{
    console.log(t);
    t++
}while(t < 6);