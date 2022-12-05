
export const sortByName = ( arr ) =>{
    arr.sort((a, b) => a.name.localeCompare(b.name));
    console.log("sort" ,arr);
    return arr;

} 
export const sortByAge = ( arr ) =>{
    arr.sort((a, b) => a.age - b.age);
    console.log("sort" ,arr);
    return arr;
} 

// export const chackKindSort = ( arr ) =>
// {
//     arr.evry()
// }