
async function getPlaceHolder(){
    const response =await fetch('https://jsonplaceholder.typicode.com/posts/1')
    //return response;
    console.log(response.ok);
    console.log(response.status);
    console.log(await response.json()); 
}
getPlaceHolder();
//const response =await getPlaceHolder();
//console.log();