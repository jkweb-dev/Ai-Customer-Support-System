import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import fs from "fs/promises";

export async function parsePDF(filePath) {
    
  const data = await fs.readFile(filePath);

  const pdf = await getDocument({
    data: new Uint8Array(data),
  }).promise;

  let text = "";

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);

    const content = await page.getTextContent();

    const pageText = content.items
      .map((item) => item.str)
      .join(" ");

    text += pageText + "\n";
  }

  return text.trim();
}