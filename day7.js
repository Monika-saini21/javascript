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

        // Example
        // This example demonstrates the use of firstChild and how whitespace nodes might interfere with using this property.

            // html                                       js 
            //     <p id="para-01">                           const     
            //     <span>First span</span>                    p01 = document.getElementById("para-01");     
            //     </p>                                        console.log(p01.firstChild.nodeName);
        
        // In the above, the console will show '#text' because a text node is inserted to maintain the whitespace between the end 
        // of the opening <p> and <span> tags. Any whitespace will create a #text node, from a single space to multiple spaces, 
        // , tabs, and so on.

        // Another #text node is inserted between the closing </span> and </p> tags.

        // If this whitespace is removed from the source, the #text nodes are not inserted and the span element becomes the 
        // // paragraph's first child.

        // html                                                     js
        //     <p id="para-01"><span>First span</span></p>            const p01 = document.getElementById("para-01");
        //                                                            console.log(p01.firstChild.nodeName);

        // Now the console will show 'SPAN'.

        // To avoid the issue with node.firstChild returning #text or #comment nodes, Element.firstElementChild can be used 
        // to return only the first element node.



// lastChild
// The read-only lastChild property of the Node interface returns the last child of the node, 
// or null if there are no child nodes.        
//it is same as first chid but it retun the last child.



// 🔎 attribute in dom 

// # getAttribute(att);   //to get the attribute value.
// #setAttribute(att,val)  //to set the attribule value.

// 🔎style in DOM

// #  node.style    // it is use to style the element dynamicly.


// 🔎insert element in DOM

        // for intert the element first of all create it 
        // e.g :  let div = document.createElement("div")    //after creating  the element insert the value.
        //   div.innerText = " hello";

        // after insert the value insert the element you want to add.


// #  node.append(element)    // add at the end of node (inside).
// #  node.prepend(element)   // add at the start of node (inside).
// #  node.before(element)    // add at the start of node (outside)
// #  node.after(element)     // add at the end of node (outside).
//#   nodeparent.appendChild(nodeChild)  // it add the HTML in the parent as child.
// #  nodeparent.remove(nodechild)     //remove the parent child we mention .

// 🔎Delete element in DOM
// #  Node.remove()  //remove the node.
