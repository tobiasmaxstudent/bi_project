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
    const errorDiv = document.createElement('div')
    errorDiv.id = 'error-container'

    const uploadDiv = document.createElement('div')
    uploadDiv.id = 'upload-container'

    const tableDiv = document.createElement('div')
    tableDiv.id = 'table-container'
    this.appContainer.appendChild(errorDiv)
    this.appContainer.appendChild(uploadDiv)
    this.appContainer.appendChild(tableDiv)
  }

  #showError(message){
    const errorContainer = document.getElementById('error-container')
    errorContainer.innerHTML = `<div class="error-message">${message}</div>`
  }
  initializeComponents() {
    this.fileUpload = new FileUploadComponent('upload-container')
    this.table = new TableComponent('table-container')
    this.fileUpload.onFileSelected = (file) => {
      this.handleSelectedFile(file)
    }
  }
 
  handleSelectedFile(file) {
  if (!this.#isValidFile(file)) {
    this.#showError('The selected file is empty.')
    return
  }
  
  const reader = new FileReader()
  reader.onload = (fileUploaded) => {
    const csvText = fileUploaded.target.result
    const csvTable = CsvTable.fromCSV(csvText)
    
    if (!this.#hasData(csvTable)) {
      this.#showError('No data found in CSV file.')
      return
    }
    
    this.table.setData(csvTable)
  }
  reader.readAsText(file)
}

#isValidFile(file) {
  return file.size > 0
}

#hasData(csvTable) {
  return csvTable.getRowCount() > 0
}
}

new App()
