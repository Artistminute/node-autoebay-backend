import { Module } from "@nestjs/common";
import { EbayService } from "./EbayService";
import { EbayController } from "./EbayController";

@Module({

    components: [EbayService],
    controllers: [EbayController]

})
export class EbayModule { }