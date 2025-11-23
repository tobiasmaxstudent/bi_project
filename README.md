# Bi-Process

## 📋 Beskrivning
Bi-Process är en webbaserad CSV-läsare som låter användare enkelt ladda upp och visualisera CSV-data i tabellformat. Appen är utvecklad som del av en universitetskurs vid Linnéuniversitetet.

##  Vision
Användare behöver ett enkelt sätt att snabbt inspektera CSV-data utan att behöva öppna Excel eller andra tyngre program. Bi-Process löser detta genom att erbjuda ett intuitivt gränssnitt för filöverföring och datavisualisering.

## ✅ Krav
- **Req 1**: Användaren kan ladda upp CSV-filer via klick eller drag-and-drop
- **Req 2**: CSV-data visas korrekt i en HTML-tabell med headers och rader
- **Req 3**: Användaren kan rensa datat och ladda upp en ny fil




### Steg-för-steg
```bash
# Klona repot
git clone [DIN_REPO_URL]
cd bi-process

# Öppna i webbläsaren
open index.html
```

##  Hur man använder appen

1. **Ladda upp fil**: Klicka på upload-området eller dra en CSV-fil dit
2. **Se data**: Din CSV-data visas omedelbar som en tabell
3. **Rensa**: Klicka "Clear"-knappen för att ladda upp en ny fil

##  Projektstruktur
```
bi-process/
├── index.html                 # Huvudsida
├── styles.css                 # Styling
├── app.js                      # Huvudapplikation
├── FileUpLoad-component.js    # Upload-komponent
├── Table-component.js         # Tabell-komponent
├── csv-module/                # Modul för CSV-Parsing
```

##  Teknologi
- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Markup**: HTML
- **Styling**: CSS
- **CSV-parsing**: Egen CSV-modul (L2)

##  Testing
Appen har testats manuellt enligt kravspecifikationen. Se `TEST_CASES.md` för detaljerade testresultat.


##  Licens
MIT License - Se LICENSE-fil för detaljer

##  Författare
Utvecklad som laboration 3 vid Linnéuniversitetet