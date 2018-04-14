import { Controller, Get, Res } from "@nestjs/common";
import { EbayService } from "./EbayService";
import { BaseController } from "../lib/BaseController";
import { EbayAPICalls } from "./EbayAPICalls";

@Controller('ebay')
export class EbayController extends BaseController {

    public constructor(private readonly ebayService: EbayService) {

        super();

    }


    @Get('orders')
    public async getOrders(@Res() response): Promise<void> {

        response.send(await this.ebayService.query(EbayAPICalls.SERVICE_TRADING, EbayAPICalls.GET_ORDERS, {

            OrderStatus: 'Active',
            NumberOfDays: 10

        }));

    }

}