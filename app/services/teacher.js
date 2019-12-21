import request from '../utils/request';


export async function getTeacherInfo(pram) {
    return request('/api/v1/teacher/' + pram + '/profile');
}

/**
 * 
 * @param {string} instituteid 
 * @param {string} teacherid 
 * @param {number} year 
 */
export async function getTeacherClassByDay(instituteid, teacherid, year) {
    return request('/api/v1/routine/institute/' + instituteid + '/teacher/' + teacherid + '/academic_year/' + year + '/gettodayclass/all');
}

/**
 * 
 * @param {string} routine_id 
 */
export async function getRouting(routine_id) {
    return request('/api/v1/routine/' + routine_id + '/studentForEnroll/all');
} 

/**
 * 
 * @param {string} params this is the body of the post request
 */
export async function enrolledStudent(params) {
    return request(
        '/api/v1/subjectenroll/create/enrolledStudentList',
        {
            method: 'POST',
            body: params,
        },
    );
}

export async function previouslyEnrollStudentList(params) {
    return request(
        '/api/v1/routine/already/studentForEnroll/list',
        {
            method: 'POST',
            body: params,
        },
    );
}  

export async function previouslyEnrollStudentUpdate(params) {
    return request(
        '/api/v1/routine/already/studentForEnroll/update',
        {
            method: 'POST',
            body: params,
        },
    );
}  


export async function getTheStudentAttendentList(routine_id) {
    return request('/api/v1/subjectenroll/routine/' + routine_id + '/studentForAttendence/all');
}

export async function takenAttendedStudentList(params) {
    return request(
        '/api/v1/subjectenroll/routine/attendancetaken/student/list',
        {
            method: 'POST',
            body: params,
        },
    );
}

export async function takenAttendedStudentUpdate(params) {
    return request(
        '/api/v1/subjectenroll/routine/attendancetaken/student/update',
        {
            method: 'POST',
            body: params,
        },
    );
}


export async function attendedStudentList(params) {
    return request(
        '/api/v1/class/create/attendedStudentList',
        {
            method: 'POST',
            body: params,
        },
    );
}



export async function sendSMSToAbsent(params) {
    return request(
        '/api/v1/class/sms/send/absent',
        {
            method: 'POST',
            body: params,
        },
    );
}

export async function sendSMSToPresent(params) {
    return request(
        '/api/v1/class/sms/send/present',
        {
            method: 'POST',
            body: params,
        },
    );
}