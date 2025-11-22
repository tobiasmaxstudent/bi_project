import { FileUploadComponent } from "./FileUpLoad-component.js";
import { TableComponent } from "./Table-component.js";
import { CsvTable, CsvParser, CSVFormat } from '../csv-module/src/index.js'
class App {
  constructor() {
    this.appContainer = document.getElementById('app')
    this.createContainers()
    this.initializeComponents()
  }

  createContainers() {
    const uploadDiv = document.createElement('div')
    uploadDiv.id = 'upload-container'

    const tableDiv = document.createElement('div')
    tableDiv.id = 'table-container'

    this.appContainer.appendChild(uploadDiv)
    this.appContainer.appendChild(tableDiv)
  }

  initializeComponents() {
    this.fileUpload = new FileUploadComponent('upload-container')
    this.table = new TableComponent('table-container')
    this.fileUpload.onFileSelected = (file) => {
    this.handleFileSelected(file)
    }
  }

  handleFileSelected(file) {
  // 1. Läs filinnehållet
  // 2. Parsa med CsvTable.fromCSV()
  // 3. Skicka till table via setData()
}
}

new App()
