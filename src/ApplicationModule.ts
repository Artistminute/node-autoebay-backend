import { Module } from "@nestjs/common";
import { EbayModule } from "./ebay/EbayModule";

@Module({

    imports: [

        EbayModule

    ]

})
export class ApplicationModule { }