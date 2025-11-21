class FileUploadComponent {
  constructor(containerId) {
    this.container = document.getElementById(containerId)
    this.render()
    this.submittedFile = null
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
    fileInput.addEventListener('change', (fileInputEvent) =>{
    const file = fileInputEvent.target.files[0]
    if (file && file.type === 'text/csv'){
        this.submittedFile = file
    }
    })
}
    getFile() {
        return this.submittedFile
    }
  }
