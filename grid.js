let rows = 100;
let cols=26;

let addressColConst = document.querySelector(".address-col-cont");
let addressRowConst = document.querySelector(".address-row-cont");
let cellsCont = document.querySelector(".cells-cont");
let addressBar = document.querySelector(".address-bar")



//rows representationfor 1 to 100

for(let i=0;i<rows;i++){   
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class","address-col");

    addressCol.innerText = i+1; 
    addressColConst.appendChild(addressCol);
}

//colum representaion for A to Z

for(let i=0;i<cols;i++){
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class","address-row");

    addressRow.innerText =String.fromCharCode(65+i); 
    addressRowConst.appendChild(addressRow);
}


// inside the rows and coloums
for(let i=0;i<rows;i++){
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class","row-cont")
    for(let j=0;j<cols;j++){
        let cell = document.createElement("div");
        cell.setAttribute("class","cell");
        cell.setAttribute("contenteditable","true");
        cell.setAttribute("spellcheck","false")   // checking the spelling 
        // Attributes for cell and storage idenfication 
        cell.setAttribute("rid",i);  
        cell.setAttribute("cid",j);

        rowCont.appendChild(cell);
        addListenerForAddressBarDisplay(cell,i,j);
    } 
    cellsCont.appendChild(rowCont);

}
// if user click on the box the it will show which row and coloum u  have clicked function 
function  addListenerForAddressBarDisplay(cell,i,j){
    cell.addEventListener("click", (e) => {    
        let rowID =i+1;
        let colID = String.fromCharCode(65+j);
        addressBar.value=`${colID}${rowID}`;
    });
}

// by default click on first cell via DOM 
let firstCell = document.querySelector(".cell");
firstCell.click();


