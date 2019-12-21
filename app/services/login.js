import request from '../utils/request';


export async function queryInstitue() {
    return request('/api/v1/institute/allwitharray');
}


export async function AccountLogin(params) {
    return request(
        '/api/v1/auth/login/jwt',
        {
            method: 'POST',
            body: params,
        }, false
    );
}  

export async function AccountLogout(params) {
    return request(
        '/api/v1/auth/logout',
        {
            method: 'POST',
            body: params,
        }, false
    );
}  