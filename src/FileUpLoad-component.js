/**
 * File upload component allowing users to select or drag-and-drop CSV files.
 *
 * onFileSelected - Callback invoked when a file is selected.
 * onClear - Callback invoked when the clear button is clicked.
 */
export class FileUploadComponent {
  /**
   * Create a new FileUploadComponent and render it into the container.
   * @param {string} containerId - The ID of the container where the component will be rendered.
   */
  constructor(containerId) {
    this.container = document.getElementById(containerId)
    this.submittedFile = null
   
    this.onFileSelected = null
    this.onInvalidFile = null
    this.onClear = null
    this.render()
  }

  /**
   * Render the file upload UI into the container.
   * @returns {void}
   */
  render() {

    const html = `
      <label id="drop-zone">
        Drop files here.
        <input type="file" id="file-input" accept=".csv" />
      </label>
      <button id="clear-btn">Clear</button>
    `
    this.container.innerHTML = html
    this.attachListeners()
  }

  /**
   * Attach DOM event listeners for file input, drag-and-drop and clear button.
   * This is an internal helper but documented for clarity.
   * @returns {void}
   * @private
   */
  attachListeners() {
    const fileInput = document.getElementById('file-input')
    const dropZone = document.getElementById('drop-zone')
    const clearButton = document.getElementById('clear-btn')

    clearButton.addEventListener('click', () => {
      this.submittedFile = null
      document.getElementById('file-input').value = ''
      if (this.onClear){
        this.onClear()
      }
    })

    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault()
      e.stopPropagation()
    })

    dropZone.addEventListener('drop', (e) => {
  e.preventDefault()
  e.stopPropagation()
  const file = e.dataTransfer.files[0]
  if (file && file.type === 'text/csv') {
    this.submittedFile = file
    
    if (this.onFileSelected) {
      this.onFileSelected(file)
    }
  } else if (this.onInvalidFile) {
    this.onInvalidFile()
  }
})
  
fileInput.addEventListener('change', (fileInputEvent) => {
  const file = fileInputEvent.target.files[0]
  if (!file || file.type !== 'text/csv') {
    if (this.onInvalidFile) {
      this.onInvalidFile()
    }
    return
  }
  if (!this.onFileSelected) return
  this.submittedFile = file
  this.onFileSelected(file)
})

  }
  /**
   * Get the currently submitted file.
   * @returns {File|null} The selected `File` object or `null` if none selected.
   */
  getFile() {
    return this.submittedFile
  }
}
