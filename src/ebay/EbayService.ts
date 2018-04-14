import { Component } from "@nestjs/common";
import * as ebay from 'ebay-api';
import { EbayAPICalls } from "./EbayAPICalls";
import { EbayAPICallResult } from "./EbayAPICallResult";

@Component()
export class EbayService {

    private isConnected: boolean;

    public constructor() {

        this.query(EbayAPICalls.SERVICE_TRADING, EbayAPICalls.GET_ORDERS, {

            OrderStatus: 'Active',
            NumberOfDays: 10

        });

    }

    private connect(): void {

        // //
        // // https://github.com/notVitaliy/nodejs-ebay-api#xmlrequestoptions-callback
        // //
        // ebay.xmlRequest({

        //     // tanner's
        //     // devId: '5a19473f-ac1e-4b93-8bd9-958a74212f91',
        //     // certId: 'SBX-7873192f1017-0bcc-41d2-a169-cc60',
        //     // appId: 'TannerBy-DigitalA-SBX-57873192f-08f2c99f',
        //     // authToken: 'AgAAAA**AQAAAA**aAAAAA**iHrRWg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4ahAZWHog2dj6x9nY+seQ**So0EAA**AAMAAA**ppgOBwV6bW+dwPCirbo4W2YtZYQLDJxwZxRA3COUOythn0WQ4DI4jaoRbimqDygJ1gRvDJuNXKQswzIJEnSD9rWpB63gxFE6TbHUfWFWnhxVlGJTAcWv1hbVwLpsr5I9a4yBve0qGTx9zREVyYPyFnrLXjx/tq9XPVyqJ6INmaiQOlTIgZ4hlJibmHLWnw77znUFlXl/9kJd/Cp5Xw9fwKwgqfHbW139MWSOt/ZWbyFNlHpbYTxE+DEBgsL+cBtHKml7x49qlPJ3ETRokgYyem8OBeLI6uuuQ7Y4aSOJCgv3r2xlrfpn+1q2YeyQRcWx0NizTF0/88DBWnKfh4lxp7Q8yDs+UP+ochxd+FI9nMslIj3tB0BfNYKs1SfKxJNoo9F/QmGMsEF6kbuM6dJtwfLFKJhr9Br85XMKsDTK0bHogAAZSMwH5N+T25krlgJzGVcd51cCy6uH/yNr1sm2HIfi6OyAJmAX3QWhudDtHbkwlalvR5ILmnrt7IO1Lg9Jp8nraVJyp+23IR9zYNTOY29loLGWPxBcFbrFXAVScwsR4vQ/8zYUk+xC7Z7ovpJSWVTTBpLWVCFCI10Iy2WVbtJ/Ub7MaxtPFaAZ7H/mVuAYZ39H8YL3nlXzEBn+34U3rOuYuablPS6yIEGrt/NzsWH8OkxHZzcWxvj+CLupvzueG+vAV+nVPGd0ITWZ+m2tyCSLz/tPnF7Q+o6DEBn4vi+zXYuJFOCneFq2J49tYPGIIvoEYRd98mMIkNLdvBVl',

        //     // yomateod's
        //     // devId: 'b64dd49a-ede8-46af-8c91-c679d71af930',
        //     // certId: 'SBX-786bc793e58e-488f-48d5-87aa-f81c',
        //     // appId: 'MattheDa-yomateod-SBX-3786bc793-2e1e0437',
        //     // authToken: 'AgAAAA**AQAAAA**aAAAAA**LnvRWg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4ahAZWHog6dj6x9nY+seQ**Ro0EAA**AAMAAA**y5QfywYWuRmqmllxLVtq4zogrX4T5Q83WMaGsb+T5YcnfADy0yz3LqkfdLMhKKY12f4gE6PHm1a07eFOQEAsNgsbkqz+R+2HoV4mn0ckNgIRnSNfNsh3tlQLFlD3ygE4d6KceExrVGCUVkQgJG9C4jm4mpVbOfe+C3DrOhkMdXxw0S0xNofZWr9rqBZbqBT3gJ6brKEOxXCeO1G3qtqOQt4c9DDDCQ1lheFr64gAVUK1Ewo0IvLMAHxRDoJjclg0MMvTCU08IgZWvyt5KU3PneCbbRcuOdcV6kFg1Htwp4qKLp2RnXgUs2XFbR5xcRNmwHc6iCLRhsNF9ydXsgvTYUiulh8YBoIM2oRD1aznYefdAJr3PuA/w+EgYqvvX9S5F7BxJ+suWxcRTdy00mTCJZMQaM2+xko9BfVidR5KufbRkz0eYVWgXww0vACxBkDKtw50uss3SonLkKnqBIctrSsNSgXMswIyXxhh97unzr/VIbK0bfxPPy1kA9e6vESZQj5UJ9ExKW4zf2uBUHM8fmw9KWrYuAVn/bZwpd9HpUmRPaE0iS11ikCRxnc1+rPbaTuTQWm1eLKv1fVAIAx233rVbbT/pL0PDH++e/wKFtC2bEVy8MWFdRLd73ybB7moIso5zkNc81HYCUMMmrZsKSX91ayB9q2c1Uq9lpuxxtBQXnG1gWVcrHw4pZI5Xvm1jSxmGPnNuWoGEWH69l1JPyALteRCmmuVgpsROxC8r96EmvKwjxA0VpqV4oEKc+dh',

        //     devId: process.env.EBAY_DEV_ID,
        //     certId: process.env.EBAY_CERT_ID,
        //     appId: process.env.EBAY_APP_ID,
        //     authToken: process.env.EBAY_AUTH_TOKEN,
        //     sandbox: true,

        //     serviceName: 'Trading',
        //     opType: 'GetOrders',

        //     params: {

        //         OrderStatus: 'Active',
        //         NumberOfDays: 10

        //     }

        // }, function (error, results) {

        //     // console.log(error);
        //     // console.log(process.env);

        //     if (results.Ack === 'Success') {

        //         this.isConnected = true;

        //     }

        // });

    }

    public query(serviceName: EbayAPICalls, callName: EbayAPICalls, params: {}): void {

        //
        // https://github.com/notVitaliy/nodejs-ebay-api#xmlrequestoptions-callback
        //
        ebay.xmlRequest({

            // tanner's
            // devId: '5a19473f-ac1e-4b93-8bd9-958a74212f91',
            // certId: 'SBX-7873192f1017-0bcc-41d2-a169-cc60',
            // appId: 'TannerBy-DigitalA-SBX-57873192f-08f2c99f',
            // authToken: 'AgAAAA**AQAAAA**aAAAAA**iHrRWg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4ahAZWHog2dj6x9nY+seQ**So0EAA**AAMAAA**ppgOBwV6bW+dwPCirbo4W2YtZYQLDJxwZxRA3COUOythn0WQ4DI4jaoRbimqDygJ1gRvDJuNXKQswzIJEnSD9rWpB63gxFE6TbHUfWFWnhxVlGJTAcWv1hbVwLpsr5I9a4yBve0qGTx9zREVyYPyFnrLXjx/tq9XPVyqJ6INmaiQOlTIgZ4hlJibmHLWnw77znUFlXl/9kJd/Cp5Xw9fwKwgqfHbW139MWSOt/ZWbyFNlHpbYTxE+DEBgsL+cBtHKml7x49qlPJ3ETRokgYyem8OBeLI6uuuQ7Y4aSOJCgv3r2xlrfpn+1q2YeyQRcWx0NizTF0/88DBWnKfh4lxp7Q8yDs+UP+ochxd+FI9nMslIj3tB0BfNYKs1SfKxJNoo9F/QmGMsEF6kbuM6dJtwfLFKJhr9Br85XMKsDTK0bHogAAZSMwH5N+T25krlgJzGVcd51cCy6uH/yNr1sm2HIfi6OyAJmAX3QWhudDtHbkwlalvR5ILmnrt7IO1Lg9Jp8nraVJyp+23IR9zYNTOY29loLGWPxBcFbrFXAVScwsR4vQ/8zYUk+xC7Z7ovpJSWVTTBpLWVCFCI10Iy2WVbtJ/Ub7MaxtPFaAZ7H/mVuAYZ39H8YL3nlXzEBn+34U3rOuYuablPS6yIEGrt/NzsWH8OkxHZzcWxvj+CLupvzueG+vAV+nVPGd0ITWZ+m2tyCSLz/tPnF7Q+o6DEBn4vi+zXYuJFOCneFq2J49tYPGIIvoEYRd98mMIkNLdvBVl',

            // yomateod's
            // devId: 'b64dd49a-ede8-46af-8c91-c679d71af930',
            // certId: 'SBX-786bc793e58e-488f-48d5-87aa-f81c',
            // appId: 'MattheDa-yomateod-SBX-3786bc793-2e1e0437',
            // authToken: 'AgAAAA**AQAAAA**aAAAAA**LnvRWg**nY+sHZ2PrBmdj6wVnY+sEZ2PrA2dj6wFk4ahAZWHog6dj6x9nY+seQ**Ro0EAA**AAMAAA**y5QfywYWuRmqmllxLVtq4zogrX4T5Q83WMaGsb+T5YcnfADy0yz3LqkfdLMhKKY12f4gE6PHm1a07eFOQEAsNgsbkqz+R+2HoV4mn0ckNgIRnSNfNsh3tlQLFlD3ygE4d6KceExrVGCUVkQgJG9C4jm4mpVbOfe+C3DrOhkMdXxw0S0xNofZWr9rqBZbqBT3gJ6brKEOxXCeO1G3qtqOQt4c9DDDCQ1lheFr64gAVUK1Ewo0IvLMAHxRDoJjclg0MMvTCU08IgZWvyt5KU3PneCbbRcuOdcV6kFg1Htwp4qKLp2RnXgUs2XFbR5xcRNmwHc6iCLRhsNF9ydXsgvTYUiulh8YBoIM2oRD1aznYefdAJr3PuA/w+EgYqvvX9S5F7BxJ+suWxcRTdy00mTCJZMQaM2+xko9BfVidR5KufbRkz0eYVWgXww0vACxBkDKtw50uss3SonLkKnqBIctrSsNSgXMswIyXxhh97unzr/VIbK0bfxPPy1kA9e6vESZQj5UJ9ExKW4zf2uBUHM8fmw9KWrYuAVn/bZwpd9HpUmRPaE0iS11ikCRxnc1+rPbaTuTQWm1eLKv1fVAIAx233rVbbT/pL0PDH++e/wKFtC2bEVy8MWFdRLd73ybB7moIso5zkNc81HYCUMMmrZsKSX91ayB9q2c1Uq9lpuxxtBQXnG1gWVcrHw4pZI5Xvm1jSxmGPnNuWoGEWH69l1JPyALteRCmmuVgpsROxC8r96EmvKwjxA0VpqV4oEKc+dh',

            devId: process.env.EBAY_DEV_ID,
            certId: process.env.EBAY_CERT_ID,
            appId: process.env.EBAY_APP_ID,
            authToken: process.env.EBAY_AUTH_TOKEN,
            sandbox: true,

            serviceName: 'Trading',
            opType: 'GetOrders',

            params: {

                OrderStatus: 'Active',
                NumberOfDays: 10

            }

        }, function (error, results) {

            // console.log(error);
            // console.log(process.env);
            console.log(results);
            console.log(new EbayAPICallResult(results));

            if (results.Ack === 'Success') {

            }

        });

    }

}
