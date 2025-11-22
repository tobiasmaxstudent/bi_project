class TableComponent {
    constructor(containerId) {
        this.container = document.getElementById(containerId)
        this.render()
        this.submittedData = null
    }
    render() {
        const html = `<table id="data-table"></table>`
        this.container.innerHTML = html
    }
    setData(csvTable) {
        this.submittedData = csvTable
        this.updateTable()
    }

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
