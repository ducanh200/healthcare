const url ={
    BASE_URL:"http://localhost:8080/api/v3",
    PATIENT:{
        REGISTER:"/patients",
        LOGIN:"/patients/login",
        PROFILE:"/patients/profile"
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