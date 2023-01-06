// create empty array to hold bookmarks
let allBookmarks = [];

// get button on page
const addButton = document.getElementById("add");
// add event listener;
// when the button is clicked,
addButton.addEventListener("click", () => {
  // get user input
  const linkInput = document.querySelector("#link");
  const link = linkInput.value;

  const nameInput = document.querySelector("#name");
  const name = nameInput.value;

  // push and store user input into array as an object
  allBookmarks.push({ link: link, name: name });

  // get section where bookmarks will appear
  const section = document.querySelector("section");

  // htmlElArray is new array every time new bookmark is added;
  // .map() takes each element in allBookmarks array,
  const htmlElArray = allBookmarks.map((bookmark) => {
    // create section to hold delete button and bookmark name and link
    const htmlElement = document.createElement("section");
    // create delete button, add text
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    // add event listener to delete button;
    // when clicked,
    delButton.addEventListener("click", () => {
      // .childNodes gives a node list, which works like an array
      // get the second child node of htmlElement (i.e., the link and name of bookmark)
      const innerText = htmlElement.childNodes[1].innerText;
      const href = htmlElement.childNodes[1].href;
      // .filter() takes each element in allBookmarks array,
      allBookmarks = allBookmarks.filter((bookmark) => {
        // if bookmark name and link DOES NOT match those selected by innerText and href,
        // return true (keeps element in array)
        if (bookmark.name !== innerText && bookmark.link !== href) {
          return true;
          // else, return false (scraps element from array)
        } else {
          return false;
        }
      });
      // removes html element from DOM
      htmlElement.remove();
    });

    // create anchor tag
    const bookmarkEntry = document.createElement("a");
    // add link and name to achor tag
    bookmarkEntry.href = bookmark.link;
    bookmarkEntry.textContent = bookmark.name;
    // append delete button and bookmark entry to section
    htmlElement.append(delButton, bookmarkEntry);
    // return section
    return htmlElement;
  });

  // replaces all childten with new updated array
  section.replaceChildren(...htmlElArray);
});
