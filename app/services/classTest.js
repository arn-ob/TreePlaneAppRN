import request from '../utils/request';


export async function classTestCheck(params) {
    return request(
        '/api/v1/exam/mobile/class/test/check',
        {
            method: 'POST',
            body: params,
        },
    );
} 



export async function classTestGenerateEntry(params) {
    return request(
        '/api/v1/exam/mobile/class/generate/add',
        {
            method: 'POST',
            body: params,
        },
    );
} 


export async function classTestGenerateList(params) {
    return request(
        '/api/v1/exam/mobile/class/generate/list',
        {
            method: 'POST',
            body: params,
        },
    );
} 


export async function classTestStudentList(params) {
    return request(
        '/api/v1/exam/mobile/class/student/list',
        {
            method: 'POST',
            body: params,
        },
    );
} 




export async function checkTeacherAssignSubject(params) {
    return request(
        '/api/v1/exam/mobile/class/teacher/assign/subject',
        {
            method: 'POST',
            body: params,
        },
    );
} 




export async function submitClassTestSubmit(params) {
    return request(
        '/api/v1/exam/mobile/class/ct/submit',
        {
            method: 'POST',
            body: params,
        },
    );
} 