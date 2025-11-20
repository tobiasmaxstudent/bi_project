import { CsvTable, CsvParser, CSVFormat } from '../csv-module/src/index.js';


const csv = `name,age,city
Alice,25,Stockholm
Bob,30,Gothenburg`

const table = CsvTable.fromCSV(csv)
console.log(table.getHeaders()) // ['name', 'age', 'city']
console.log(table.getRowCount()) // 2