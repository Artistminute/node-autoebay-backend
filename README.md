# Backend Systems

## Getting Started

Clone this repository

```bash
https://github.com/mateothegreat/node-autoebay-backend
```

Now install node_modules

```bash
cd node-autoebay-backend
yarn install
```

Start dev server

```bash
yarn run dev
```

### Results

Successful query

```json
EbayAPICallResult {
  timestamp: 2018-04-14T05:33:38.176Z,
  ack: 'Success',
  version: '1057',
  build: 'E1057_CORE_API_18682351_R1',
  paginationResult:
   EbayAPICallResultPagination {
     totalNumberOfPages: undefined,
     totalNumberOfEntries: undefined },
  hasMoreOrders: 'false',
  ordersPerPage: '100',
  pageNumber: '1',
  returnedOrderCountActual: '0',
  results: [] }
```

### Documentation
* [Trading API Reference](https://developer.ebay.com/devzone/xml/docs/reference/ebay/index.html)
* [Node.js ebay-api Module](https://github.com/notVitaliy/nodejs-ebay-api#xmlrequestoptions-callback)