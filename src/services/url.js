const url ={
    BASE_URL:"http://localhost:8080/api/v3",
    PATIENT:{
        REGISTER:"/patients",
        LOGIN:"/patients/login",
        PROFILE:"/patients/profile",
        GETBYID:"/patients/"
    },
    DEPARTMENT:{
        LIST: "/departments",
        DETAIL:"/departments",
        GETBYID:"/departments/"
    },
    SHIFT:{
        LIST:"/shifts",
        GETBYID:"/shifts/"
    },
    BOOKING:{
        CREATE:"/bookings",
        LIST:"/bookings"
    },
    INVOICE:{
        LIST:"/results",
        GETBYID:"/results/findById"
    },
    DOCTOR:{
        LIST:"/doctors",
        GETBYID:"/doctors/"
    },
}
export default url;