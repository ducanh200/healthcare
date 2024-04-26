const url ={
    BASE_URL:"http://localhost:8080/api/v3",
    PATIENT:{
        REGISTER:"auth/patients",
        LOGIN:"auth/patients/login",
        PROFILE:"auth/patients/profile"
    },
    DEPARTMENT:{
        LIST: "/departments",
        DETAIL:"/departments"
    },
    SHIFT:{
        LIST:"/shifts"
    },
    BOOKING:{
        CREATE:"/bookings",
        LIST:"/bookings"
    }
}
export default url;