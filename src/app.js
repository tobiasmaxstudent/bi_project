import { FileUploadComponent } from "./FileUpLoad-component.js";
import { TableComponent } from "./Table-component.js";
import { CsvTable, CsvParser, CSVFormat } from '../csv-module/src/index.js'

/**
 * Main application class.
 * Handles initialization and coordination between components.
 */
class App {
  constructor() {
    this.appContainer = document.getElementById('app')
    this.#initialize()
  }

  #initialize() {
    this.#createContainers()
    this.#initializeComponents()
  }

  #createContainers() {
    const instructionDiv = document.createElement('div')
    instructionDiv.id = 'instruction-container'
    instructionDiv.innerHTML = `
    <div class="instruction-card">
      <h3>How to use</h3>
      <ol>
        <li>Upload a CSV file by dragging it or clicking the upload area</li>
        <li>Your data will appear as a table below</li>
        <li>Click "Clear" to reset and upload a new file</li>
      </ol>
    </div>`
    const errorDiv = document.createElement('div')
    errorDiv.id = 'error-container'

    const uploadDiv = document.createElement('div')
    uploadDiv.id = 'upload-container'

    const tableDiv = document.createElement('div')
    tableDiv.id = 'table-container'
    tableDiv.style.display = 'none'

    this.appContainer.appendChild(instructionDiv)
    this.appContainer.appendChild(errorDiv)
    this.appContainer.appendChild(uploadDiv)
    this.appContainer.appendChild(tableDiv)
  }

  #showError(message) {
    const errorContainer = document.getElementById('error-container')
    errorContainer.innerHTML = `<div class="error-message">${message}</div>`
    errorContainer.scrollIntoView()
  }
  #initializeComponents() {
    this.fileUpload = new FileUploadComponent('upload-container')
    this.table = new TableComponent('table-container')
    this.fileUpload.onFileSelected = (file) => {
      this.#handleSelectedFile(file)
    }
    this.fileUpload.onInvalidFile = () => {
      this.#showError('Only CSV files are allowed.')
    }
    this.fileUpload.onClear = () => {
      document.getElementById('error-container').innerHTML = ''
      document.getElementById('table-container').innerHTML = ''
      document.getElementById('table-container').style.display = 'none'
    }
  }

  #handleSelectedFile(file) {
    if (!this.#isValidFile(file)) {
      this.#showError('The selected file is empty.')
      return
    }
    this.#readAndProcessFile(file)
  }

  #readAndProcessFile(file) {
    const reader = new FileReader()
    reader.onload = (event) => this.#processCSV(event)
    reader.readAsText(file)
  }

  #processCSV(event) {
    const csvText = event.target.result
    const csvTable = CsvTable.fromCSV(csvText)

    if (!this.#hasData(csvTable)) {
      this.#showError('No data found in CSV file.')
      return
    }

    this.table.setData(csvTable)
  }


  #isValidFile(file) {
    return file.size > 0
  }

  #hasData(csvTable) {
    return csvTable.getRowCount() > 0
  }
}

new App()