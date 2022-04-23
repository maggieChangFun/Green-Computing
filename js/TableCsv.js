export default class{
    /**
     * 
     * @param {HTMLTableElement} root The table element which will display the CSV data. 
     */
    constructor(root){
        this.root = root;
    }

    /**
     * Clears existing data in the table and replaces it with new data.
     * 
     * @param {string[][]} data A 2D array of data to be used as the table body
     * @param {string[]} headerColumns List of heading to be used
     */
    update(data, headerColumns = []){
        this.clear();
        this.setHeader(headerColumns);
        this.setBody(data);
    }

    /**
     * Clears all contents of the table (incl. the header).
     */
    clear(){
        this.root.innerHTML = "";
    }

    /**
     * Sets the table header.
     * 
     * @param {String[]} headerColumns List of heading to be used
     */
    setHeader(headerColumns){
        this.root.insertAdjacentHTML("afterbegin",`
            <thead>
                <tr>
                    ${headerColumns.map(text => `<th>${text}</th>`).join("")}
                </tr>
            </thead>
        `);
    }

    /**
     * Sets the table body.
     * 
     * @param {string[][]} data 
     */
    setBody(data){
        const rowsHtml = data.map(row =>{

            return `
                <tr id="state-${row[0]}">
                    ${row.map(text => `<td>${text}</td>`).join("")}
                </tr>
            `;
        });

        this.root.insertAdjacentHTML("beforeend",`
            <tbody>
                ${rowsHtml.join("")}
            </tbody>
        `);
    }
}