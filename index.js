const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const showNome = document.getElementById("nome");

// a chave da app
const accesskey = "d6RBe5zPr_baY8lKcPqBglB7gIxXFQrdV9iDB8gJTZY";

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/collections?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    const results = data.results;

    if(page === 1) {
        searchResult.innerHTML = "";
    }

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.cover_photo.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.append(image)
        searchResult.append(imageLink)
    })

    showMoreBtn.style.display = "block"
}

keyword = "";

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", () => {
    page++
    searchImages();
})







