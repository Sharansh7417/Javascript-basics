
// const arr=[1,2,3,4,5]

// for (const i of arr) {
//     console.log(i);
// }

// const str=["flash","batman","superman"];

// for (const i of str) {
//     console.log(i);
// }

//maps

const map=new Map;//map only takes unique key value pairs
map.set("1","one")
map.set("2","two")
map.set("3","three");
map.set("1","four")

// console.log(map);

for (const [key,value] of map) {//map can be iterated in this way but not objects
    console.log(key +':-'+value);
}

