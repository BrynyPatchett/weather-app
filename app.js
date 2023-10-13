console.log("Test");

const search = document.querySelector('#searchbar');
const searchButton = document.querySelector('.searchicon');


searchButton.addEventListener("click",function(e){
    console.log(search.value);
});