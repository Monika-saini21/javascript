// 🔎 window objects🔎
// the window object represent an open window in a brower.It is brower's object (not js) & is automatically created by brower.
// It is a global object with lots of property & method.


// 🔎🔎🎈Document object model🎈🔎🔎
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

// window
//    ↓
// document
//    ↓
// html
//  ┌───────┴───────┐
// head             body
// ├── meta         ├── div
// ├── meta         │   ├── img
// ├── title        │   ├── h1
// └── link         │   ├── p
//                  │   └── div
//                  └── script

// console.log(window.document); // is mai sare html ka code aaye ga.
// console.dir(window.document);  // is mai window ke ander ke document ki sari propety or method aaye gi.
                                  // (means print the document of object)


// 🎈DOM manipulation🎈
 
// #1. selectiong with id.
    //  document.getElementById("myId");   //if i put the name which is not present init retun null.

// #2. selectiong with class.
    //  document.getElementsByClassName("className") ;  // html collection retun in array   if i put the name which is not present init retun blank array.

// #3. selectiong with tag.
    //  document.getElementsByTagName("p");

//#4. query Selecter  //better way to select the element.  use this to select the (id,class,tag) it gave the first matching element.
    //  document.querySelector("id/class/tag")
     //return first element
//#5. query Selector All    // use to access the all matching element.
    //  document.querySelectorAll("id/class/tag")
    // return nodelist



//  🔎 DOM manipulation property 🔎    

    // #1. tagName: return tag for element nodes.
    // #2. innerText: return the text content of the element and all its Children.
    // #3. innerHTML: return the plain text or HTML contents in element
    // #4. textContent: return textual content even for hidden element


// firstChild property:
    // The read-only firstChild property of the Node interface returns the node's first child in the tree, or null if the node has no children.
    // If the node is a Document, this property returns the first node in the list of its direct children.

    // Note: This property returns any type of node that is the first child of this one. It may be a Text or a Comment node. 
    // If you want to get the first Element that is a child of another element, consider using Element.firstElementChild.

