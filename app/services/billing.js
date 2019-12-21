import request from '../utils/request';


export async function test() {
    return request('/api/v1/account/invoice/bill/student_id');
}

export async function getTheListOfBillByStudent(params) {
    return request(
        '/api/v1/account/invoice/bill/studentid',
        {
            method: 'POST',
            body: params,
        },
    );
} 

export async function getAllTheListOfBillByStudent(params) {
    return request(
        '/api/v1/account/invoice/bill/history/studentid',
        {
            method: 'POST',
            body: params,
        },
    );
} 



export async function multiinvoiceNumberSend(params) {
    return request(
        '/api/v1/account/save/multiinvoice',
        {
            method: 'POST',
            body: params,
        },
    );
}  


export async function singleinvoiceNumberSend(params) {
    return request(
        '/api/v1/account/save/singleinvoice',
        {
            method: 'POST',
            body: params,
        },
    );
}  



export async function getPaymentMethods(params) {
    return request(
        '/api/v1/account/choose/payment',
        {
            method: 'POST',
            body: params,
        },
    );
}  