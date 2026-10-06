import fs from 'fs'
import { PDFDocument } from 'pdf-lib'

async function removeLastPage() {
  const pdfPath = './src/assets/Souvenir.pdf'
  const pdfBytes = fs.readFileSync(pdfPath)
  const pdfDoc = await PDFDocument.load(pdfBytes)
  
  const numPages = pdfDoc.getPageCount()
  console.log(`Original PDF has ${numPages} pages.`)
  
  if (numPages > 1) {
    pdfDoc.removePage(numPages - 1)
    const newPdfBytes = await pdfDoc.save()
    fs.writeFileSync(pdfPath, newPdfBytes)
    console.log(`Successfully removed the last page. The PDF now has ${pdfDoc.getPageCount()} pages.`)
  } else {
    console.log('PDF has only 1 page, cannot remove.')
  }
}

removeLastPage().catch(console.error)
