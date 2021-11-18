import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";
import { PdfCreateResponseDto } from "../models/pdfCreateResponseDto";
import { PdfService } from "../services/pdfService";


  @Route("pdf")
  export class PdfController extends Controller {

    @Post()
    public async getPdf(@Body() request: any) : Promise<PdfCreateResponseDto>
    {
        const pdfService = new PdfService();
        const result = await pdfService.createPdf(request);
        return { pdf: result };
    }

  }