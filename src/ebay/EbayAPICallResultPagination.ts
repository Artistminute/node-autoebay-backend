export class EbayAPICallResultPagination {

    public totalNumberOfPages: number;
    public totalNumberOfEntries: number;

    public constructor(obj: any) {

        this.totalNumberOfPages = obj.totalNumberOfPages;
        this.totalNumberOfEntries = obj.totalNumberOfEntries;

    }

}