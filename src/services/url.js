const url ={
    BASE_URL:"http://localhost:8080/api/v3",
    PATIENT:{
        REGISTER:"/patients",
        LOGIN:"/patients/login",
        PROFILE:"/patients/profile",
        GETBYID:"/patients/",
        EDIT:"/patients/"
    },
    DEPARTMENT:{
        LIST: "/departments",
        DETAIL:"/departments",
        GETBYID:"/departments/"
    },
    SHIFT:{
        LIST:"/shifts/available",
        GETBYID:"/shifts/"
    },
    BOOKING:{
        CREATE:"/bookings",
        LIST:"/bookings",
        GETBYID:"/bookings"
    },
    RESULTS:{
        BOOKINGSUCCESS:"/results/bookingSuccess",
        GETBYID:"/results/findById",
        GETBOOKINGID:"/results/GetByBookingId"
    },
    DOCTOR:{
        LIST:"/doctors",
        GETBYID:"/doctors/"
    },
    TEST:{
        LIST:"/tests"
    },
    EMAIL:{
        SENT:"/send_email"
    },
    RESULTMEDICINE:{
        CREATE:"/result_medicine",
        DETAIL:"/result_medicine/resultId/",
        DELETE:"/result_medicine/"
    },
}
export default url;