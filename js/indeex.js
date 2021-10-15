const storeTitle = document.getElementById("store-title");
console.log(storeTitle);
{/* <h1 id="store-title">mahdi shoping</h1> */}

const storeTitle1 = document.getElementsByClassName("store-title");
console.log(storeTitle1);
// HTMLCollection [h2.store-title]
// 0: h2.store-title
// length: 1
// [[Prototype]]: HTMLCollection


const p = document.querySelector("p");
console.log(p);
{/* <p>juice</p> */}

const pAll = document.querySelectorAll("p");
console.log(pAll);
{/* <p>juice</p> */}
// NodeList(2) [p, p]
// 0: p
// 1: p
// length: 2
// [[Prototype]]: NodeList

const p2 = document.querySelector(".root .p-1");
console.log(p2);
{/* <p class="p-1">juice</p> */}

// we learn to access to dom
p.remove();
// now in dom we cant see this tag

pAll.forEach ((item) => {
    console.log(item);
    item.remove();
});
{/* <p class="p-1">juice</p>
<p>ice cream</p> */}
// now in dom we cant see any p tag 


// access to content
pAll.forEach ((item) => {
    console.log(item.textContent);
});
// juice
// ice cream

// change content
pAll.forEach ((item) => {
    item.textContent = "update";
    console.log(item.textContent);
});
// 2 update

