import { bKashPaySystem } from '../utils/bKashPayment';
import request from '../utils/request';

export async function AuthCreate(body, headerauth){
    return bKashPaySystem('https://checkout.sandbox.bka.sh/v1.0.0-beta/checkout/token/grant', 'AuthCreate', body, headerauth);
}

export async function BillCreate(body, headerauth){
    return bKashPaySystem('https://checkout.sandbox.bka.sh/v1.0.0-beta/checkout/payment/create', 'CreateTrx', body);
}

export async function sendPaymentInfo(params) {
    return request(
        '/api/v1/institute/find/payment/details',
        {
            method: 'POST',
            body: params,
        },
    );
}  