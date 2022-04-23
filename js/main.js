import TableCsv from "./TableCsv.js";

const tableRoot = document.querySelector("#csvRoot");
//const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCsv(tableRoot);

/**
 * 
 */
csvFileInput.addEventListener("change", e =>{
    console.log(csvFileInput.files[0]);
    Papa.parse(csvFileInput.files[0],{
        delimiter: ",",
        skipEmptyLines: true,
        complete: results =>{
            tableCsv.update(results.data.slice(1), results.data[0]);
        }
    });
});

/**
 * tableCsv.update([
    ["04","AZ",1000,3000,200,30],
    ["06","CA",2000,4000,500,30]
],["ID","State","TE","GE","Fine","Subsidies"]);
 */


