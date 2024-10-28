const candidate=[{
    "id":1,
    "email":"employee1@gmail.com",
    "password":"123"
},
{
    "id":2,
    "email":"employee2@gmail.com",
    "password":"123"
},
{
    "id":3,
    "email":"employee3@gmail.com",
    "password":"123"
}
]
const admin=[
    {
        "id":1,
        "email":"admin@gmail.com",
        "password":"123"
    }
]

export const setLocalStorage=()=>{
    localStorage.setItem("candidate",JSON.stringify(candidate))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const  getLocalStorage=()=>{
    const data=JSON.parse(localStorage.getItem("candidate"))
}