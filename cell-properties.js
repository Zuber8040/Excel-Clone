// Storage 
// in this we will see that if user c=click itlaic ,bold,and evry cell functions

let sheetDB = [];  // it stored all the actions 

for(let i=0;i<rows;i++){
    let sheetRow =[];  // it stored every cell obj stored here
    for(let j=0;j<cols;j++){
        let cellProp={
            
        }
        sheetRow.push(cellProp);
    }   
    sheetDB.push(sheetRow);
}