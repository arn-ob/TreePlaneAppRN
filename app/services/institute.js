import request from '../utils/request';


export async function getAllInstitute() {
    return request('/api/v1/institute/all');
}

export async function getInstituteDetails(params) {
    return request(
        '/api/v1/institute/find/this/id',
        {
            method: 'POST',
            body: params,
        },
    );
}  