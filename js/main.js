import TableCsv from "./TableCsv.js";
import ChartCsv from "./ChartCsv.js";

const tableRoot = document.querySelector("#csvRoot");
//const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCsv(tableRoot);

/**
 * csvFileInput.addEventListener("change", e =>{
    console.log(csvFileInput.files[0]);
    Papa.parse(csvFileInput.files[0],{
        delimiter: ",",
        skipEmptyLines: true,
        complete: results =>{
            tableCsv.update(results.data.slice(1), results.data[0]);
        }
    });
});
 */


/**
 * 
 */
tableCsv.update([
    ["32","NV",5.61,2.86,0,0],
    ["06","CA",14.27,2.68,0,0],
    ["04","AZ",6.07,2.45,1,0]
],["ID","State","TE","GE","Subsidies","Fine"]);

const chartRoot = document.querySelector("#everyDayChart");
//const csvFileInput = document.querySelector("#csvFileInput");
const chartCsv = new ChartCsv(chartRoot);

chartCsv.update([
    ["32","NV",5.61,2.86,0,0],
    ["06","CA",14.27,2.68,0,0],
    ["04","AZ",6.07,2.45,1,0]
],["ID","State","TE","GE","Subsidies","Fine"]);
