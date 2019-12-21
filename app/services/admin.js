import request from '../utils/request';


export async function getAdminInfoFromUser(params) {
    return request('/api/v1/user/findbyID', 
    {
        method: 'POST',
        body: params,
    });
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