import { EbayAPICallResultPagination } from "./EbayAPICallResultPagination";

export class EbayAPICallResult<T> {

    public timestamp: Date;
    public ack: string;
    public version: number;
    public build: string;
    public paginationResult: EbayAPICallResultPagination;
    public hasMoreOrders: boolean;
    public ordersPerPage: number;
    public pageNumber: number;
    public returnedOrderCountActual: number;
    public results: T[];

    public constructor(obj: any) {

        this.timestamp = new Date(obj.Timestamp);
        this.ack = obj.Ack;
        this.version = obj.Version;
        this.build = obj.Build;
        this.paginationResult = new EbayAPICallResultPagination(obj.PaginationResult);
        this.hasMoreOrders = obj.HasMoreOrders;
        this.ordersPerPage = obj.OrdersPerPage;
        this.pageNumber = obj.PageNumber;
        this.returnedOrderCountActual = obj.ReturnedOrderCountActual;

        if (obj.Orders) {

            this.results = obj.Orders;

        }

    }

}