const people = [{ name: "ciise", age: 30, city: "borama" },
                { name: "mohamed",age: 35, city: "hargaysa" },
                { name: "nimco", age: 40, city: "gorowe" },
]
for (const person of people) {
   for (const key in person) {
    console.log(key + "= " + person[key]);
}
console.log("------------------------------");
}