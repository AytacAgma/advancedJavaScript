let sayi1=10
sayi1="agma"
let student={id:1,name:"aytac"}
//console.log("🚀 ~ file: app.js ~ line 4 ~ student", student)

function save(puan=10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)    
}
//save(undefined,student)

let students=["aytac","halit","engin","busra"]

//console.log("🚀 ~ file: app.js ~ line 12 ~ students", students)

let students2 = [student,{id:2,name:"halit"},"Ankara",{city:"İstanbul"}]
//console.log("🚀 ~ file: app.js ~ line 15 ~ students2", students2)

//*** rest
//params
//varArgs
let showProducts = function (id,...products) {
    console.log(id)    
    console.log(products[0])
}

// console.log("🚀 ~ file: app.js ~ line 26 ~ showProducts", typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz")

//*** spread
let points=[1,2,3,4,50,60]
console.log("🚀 ~ file: app.js ~ line 31 ~ points", ...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring
let populations = [10000, 20000, 30000, [40000,100000]]
let [small,medium,high,[veryHigh,maximum]]=populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)    
}

someFunction(populations)

let category = {id:1,name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)