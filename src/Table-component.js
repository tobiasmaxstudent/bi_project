import { CsvTable } from "../csv-module/src/index.js";

/**
 * Table component to display CSV data in a tabular format.
 */
export class TableComponent {
    /**
     * 
     * @param {string} containerId - The ID of the container where the table element will be rendered.
     */
    constructor(containerId) {
        this.container = document.getElementById(containerId)
        this.render()
        this.submittedData = null
    }
    
    /**
     * Render the table structure inside the container.
     * This method initializes the table before data is provided.
     */
    render() {
        const html = `<table id="data-table"></table>`
        this.container.innerHTML = html
    }

    /**
     * 
     * @param {CsvTable} csvTable - A CsvTable object from the csv-module
     */
    setData(csvTable) {
        this.submittedData = csvTable
        this.container.style.display = 'block'
        this.updateTable()
    }

    /**
    * Updates the table with the current submitted data.
    * Replaces the existing table content with newly generated HTML.
    */
    updateTable() {
        this.container.innerHTML = this.#buildTableHTML()
    }


    #buildTableHTML() {
        const header = this.#createHeaderRow()
        const body = this.#createBodyRows()
        const html = `<table>${header}${body}</table>`
        return html
    }

    #createHeaderRow() {
        const headers = this.submittedData.getHeaders()
        const headerCells = headers.map(header => `<th>${header}</th>`).join('')
        return `<thead><tr>${headerCells}</tr></thead>`
    }

    #createBodyRows() {
        const rows = this.submittedData.getRows()
        const bodyRows = rows.map(row => {
            const cells = row.map(cell => `<td>${cell}</td>`).join('')
            return `<tr>${cells}</tr>`
        }).join('')
        return `<tbody>${bodyRows}</tbody>`
    }

}