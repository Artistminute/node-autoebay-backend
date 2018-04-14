import { Controller, Get } from "@nestjs/common";
import { EbayService } from "./EbayService";
import { BaseController } from "../lib/BaseController";

@Controller('ebay')
export class EbayController extends BaseController {

    public constructor(private readonly ebayService: EbayService) {

        super();

    }


    @Get('login')
    public getLogin(): void {

        // this.ebayService.connect();

    }

}