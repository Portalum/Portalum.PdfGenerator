import { AnyRecord } from "dns";
import getStream from "get-stream";
import MemoryStream from "memorystream";
import PdfPrinter from "pdfmake";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export class PdfService {

    fonts = {
        Roboto: {
            normal: 'fonts/Roboto-Regular.ttf',
            bold: 'fonts/Roboto-Medium.ttf',
            italics: 'fonts/Roboto-Italic.ttf',
            bolditalics: 'fonts/Roboto-MediumItalic.ttf'
        }
    };

    async createPdf(data: any)
    {
        var memStream = new MemoryStream(undefined);
        var pdfPrinter = new PdfPrinter(this.fonts);
        const document = pdfPrinter.createPdfKitDocument(data);
        document.pipe(memStream);
        document.end();

        const streamData = await getStream.buffer(memStream);
        let pdfBase64 = Buffer.from(streamData).toString('base64');

        return pdfBase64;
    }
}