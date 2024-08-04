const accesskey = "3NORckZXZXNEaQ5Y5v23-F1--MkxcGMMYE-PEj_Mk7M";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchresults = document.getElementById("search-result");
const showmorebtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey }&per_page=9`;
    
// api request
    
    const response = await fetch(url);//Uses the fetch API to make an asynchronous request to the constructed URL
    const data = await response.json();

    if(page=== 1){
        searchresults.innerHTML = "";
    }

    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchresults.appendChild(imagelink);



    })
    showmorebtn.style.display="block";
}
    


    



searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();

})
showmorebtn.addEventListener("click",()=>{
    page++;
    searchImages();
}
)