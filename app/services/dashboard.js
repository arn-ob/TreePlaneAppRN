import request from '../utils/request';

// Global
export async function getAllInstitute() {
    return request('/api/v1/institute/all');
}

export async function dashboardAttendenceHome(params) {
    return request(
        '/api/v1/dashboard/attendence/home',
        {
            method: 'POST',
            body: params,
        },
    );
}  

export async function specialDashboardAttendenceHome(params) {
    return request(
        '/api/v1/dashboard/attendence/special/home',
        {
            method: 'POST',
            body: params,
        },
    );
}  


export async function specialDashboardClassWiseAttendence(params) {
    return request(
        '/api/v1/dashboard/classwise/special/attandence',
        {
            method: 'POST',
            body: params,
        },
    );
}  

export async function specialDashboardSectionWiseAttendence(params) {
    return request(
        '/api/v1/dashboard/classwise/special/section',
        {
            method: 'POST',
            body: params,
        },
    );
}  

export async function specialDashboardPeriodWiseAttendence(params) {
    return request(
        '/api/v1/dashboard/classwise/special/period',
        {
            method: 'POST',
            body: params,
        },
    );
}  




export async function dashboardClassWiseAttendence(params) {
    return request(
        '/api/v1/dashboard/classwise/attandence',
        {
            method: 'POST',
            body: params,
        },
    );
}  

export async function dashboardClassWiseAbsentList(params) {
    return request(
        '/api/v1/dashboard/classwise/absent/list',
        {
            method: 'POST',
            body: params,
        },
    );
} 

export async function dashboardManagedAbsentList(params) {
    return request(
        '/api/v1/dashboard/classwise/absent/manage/list',
        {
            method: 'POST',
            body: params,
        },
    );
} 


export async function dashboardClassList(params) {
    return request(
        '/api/v1/class/list',
        {
            method: 'POST',
            body: params,
        },
    );
} 


export async function dashboardAbsentListBasedOnClassDate(params) {
    return request(
        '/api/v1/dashboard/classwise/absent/find/by/date/range',
        {
            method: 'POST',
            body: params,
        },
    );
} 


export async function dashboardBillingSummary(params) {
    return request(
        '/api/v1/dashboard/billing/summary',
        {
            method: 'POST',
            body: params,
        },
    );
} 

// Payment Summary by date to date
export async function dashboardPaymentSummary(params) {
    return request(
        '/api/v1/dashboard/payment/summary/by/date',
        {
            method: 'POST',
            body: params,
        },
    );
}

// Payment classwise payment
export async function dashboardPaymentClasswiseView(params) {
    return request(
        '/api/v1/dashboard/payment/classwise/view',
        {
            method: 'POST',
            body: params,
        },
    );
}

// Payment Classwise details
export async function dashboardPaymentClasswiseDetails(params) {
    return request(
        '/api/v1/dashboard/payment/classwise/class/details',
        {
            method: 'POST',
            body: params,
        },
    );
}

// Payment Summary by Student ID
export async function dashboardPaymentSummaryByStudentID(params) {
    return request(
        '/api/v1/dashboard/payment/search/by/student/id',
        {
            method: 'POST',
            body: params,
        },
    );
}



// Billing And Payment Status
export async function dashboardBillingAndPaymentStatusByClassDate(params) {
    return request(
        '/api/v1/dashboard/status/class/by/date',
        {
            method: 'POST',
            body: params,
        },
    );
}


export async function dashboardBillingAndPaymentStatusByStudentID(params) {
    return request(
        '/api/v1/dashboard/status/class/by/student/id',
        {
            method: 'POST',
            body: params,
        },
    );
}


export async function dashboardPaymentStatusByDateToDate(params) {
    return request(
        '/api/v1/dashboard/status/payment/by/class/by/date',
        {
            method: 'POST',
            body: params,
        },
    );
}


export async function dashboardPaymentStatusByStudentID(params) {
    return request(
        '/api/v1/dashboard/status/payment/by/student/id',
        {
            method: 'POST',
            body: params,
        },
    );
}


// Agent Process

export async function dashboardAgentSelectedInstituteList(params) {
    return request(
        '/api/v1/user/selected/institute/list',
        {
            method: 'POST',
            body: params,
        },
    );
}

export async function dashboardAgentStudentInfoGET(params) {
    return request(
        '/api/v1/user/academic/details',
        {
            method: 'POST',
            body: params,
        },
    );
}


export async function getYearSession(params) {
    return request(
        '/api/v1/global/sessionYear/define',
        {
            method: 'POST',
            body: params,
        },
    );
}