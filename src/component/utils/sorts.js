
//sort array by name
export const sortByName = ( arr ) =>{
    arr.sort((a, b) => a.name.localeCompare(b.name));
    // console.log("sort" ,arr);
    return arr;

} 

//sort array by age
export const sortByAge = ( arr ) =>{
    arr.sort((a, b) => a.age - b.age);
    // console.log("sort2" ,arr);
    return arr;
} 

