export class FileUploadComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId)
    this.submittedFile = null
    this.onFileSelected = null
    this.onClear = null
    this.render()
  }

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
      }
    })

    fileInput.addEventListener('change', (fileInputEvent) => {
      const file = fileInputEvent.target.files[0]

      if (!file || file.type !== 'text/csv') return
      if (!this.onFileSelected) return

      this.submittedFile = file
      this.onFileSelected(file)
    })
  }

  getFile() {
    return this.submittedFile
  }
}