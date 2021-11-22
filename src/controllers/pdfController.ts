import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
    Tags,
  } from "tsoa";
import { PdfCreateResponseDto } from "../models/pdfCreateResponseDto";
import { PdfService } from "../services/pdfService";


  @Tags("Pdf")
  @Route("pdf")
  export class PdfController extends Controller {

    @Post()
    public async getPdf(@Body() request: any) : Promise<PdfCreateResponseDto>
    {
        const pdfService = new PdfService();
        const result = await pdfService.createPdf(request);
        return { pdfBase64: result };
    }

  }