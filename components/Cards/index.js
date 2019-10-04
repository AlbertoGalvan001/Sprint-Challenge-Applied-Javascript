// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const articles = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        console.log(res.data.articles)

        res.data.articles.javascript.forEach(article => {
            articles.appendChild(createCard(article));
        })

        res.data.articles.bootstrap.forEach(article => {
            articles.appendChild(createCard(article));
        })

        res.data.articles.technology.forEach(article => {
            articles.appendChild(createCard(article));
        })
        res.data.articles.jquery.forEach(article => {
            articles.appendChild(createCard(article));
        })
        res.data.articles.node.forEach(article => {
            articles.appendChild(createCard(article));
        })
    })

    .catch(err => {
        console.log(err);
    })


function creatCard(articles) {
    //create elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const image = document.createElement('div');
    const imgUrl = document.createElement('img');
    const name = document.createElement('span');

    //append children
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(image);
    image.appendChild(imgUrl);
    author.appendChild(name);

    // add classes
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    image.classList.add('img-container');

    //add content
    headline.textContent = articles.headline;
    name.textContent = articles.authorName;
    imgUrl.src = articles.authorImage;

    return card;

}