# Test Cases

| Test Name | Requirement | Input | Expected Output |
|-----------|-------------|-------|-----------------|
| Upload valid CSV file | Req 1 | Valid CSV file (.csv) with multiple rows and columns | CSV data is parsed and displayed in the table |
| Upload file with drag and drop | Req 1 | Drag a valid CSV file onto the drop zone | CSV data is parsed and displayed in the table |
| Reject non-CSV file type | Req 1 | Attempt to upload a .txt or .doc file | File is rejected, no action taken |
| Upload empty CSV file | Req 1 | CSV file with 0 bytes | Error message "The selected file is empty." is displayed |
| CSV with no data rows | Req 1 | CSV file with only headers, no data rows | Error message "No data found in CSV file." is displayed |
| Display CSV data in table | Req 2 | Valid CSV file with headers and rows | All headers appear in `<thead>`, all rows and cells appear correctly in `<tbody>` |
| Display small dataset | Req 2 | CSV file with less than 10 rows | Data displays neatly in table format with all columns visible |
| Display large dataset | Req 2 | CSV file with many rows and long column values | Table renders all data correctly and remains readable |
| Clear button removes data | Req 3 | Click the "Clear" button after uploading data | Table and error messages are cleared, upload area resets |