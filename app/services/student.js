import request from '../utils/request';


export async function getStudentInfoByID(pram) {
    return request('/api/v1/student/' + pram);
}


export async function getStudentAcademicStatus(params) {
    return request(
        '/api/v1/student/get/academic/status',
        {
            method: 'POST',
            body: params,
        },
    );
}  

export async function studentProfileEdit(params) {
    return request(
        '/api/v1/student/from/mobile/edit',
        {
            method: 'POST',
            body: params,
        },
    );
}  


export async function getSMSFromSetting(params) {
    return request(
        '/api/v1/settings/get',
        {
            method: 'POST',
            body: params,
        },
    );
}  