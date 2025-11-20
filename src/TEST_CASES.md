## Test Cases


| Test Name | Requirement | Input | Expected Output |
|-----------|-------------|-------|-----------------|
| Upload valid CSV file | Req 1 | Valid CSV file with multiple rows and columns | Data is parsed and made available in the application |
| Upload invalid file type | Req 1 | Upload a .doc or .txt file | Error message displayed to user |
| Display small dataset in table | Req 2 | CSV file with less than 10 rows | Data displays neatly in table format with all columns and rows visible |
| Display large dataset in table | Req 2 | CSV file with many rows and long values | Table remains readable and properly formatted |
| Filter data by column | Req 3 | Select a column to filter/sort | Data is filtered/sorted correctly and statistics are displayed |
| Display statistics | Req 3 | Load any CSV file | Basic statistics (row count, column count, max values) are shown |