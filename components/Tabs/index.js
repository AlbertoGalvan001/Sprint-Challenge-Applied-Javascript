// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        // console.log(res.data.topics);
        res.data.topics.forEach(topic => {
            topics.appendChild(createTab(topic))
        })
    })
    .catch(err => {
        // console.log(err);
    })
const topics = document.querySelector(".topics")
// console.log(topics);

function createTab(object) {
    // create element
    const tab = document.createElement('div');

    tab.classList.add("tab");

    tab.classList = object.tab;


    return tab;
}
