export interface Customer {
    id:string,
    firstName : string,
    lastName : string,
    avatar: string,
    addressInfo:{
        state:string,
        city: string,
        address: string
    },
    order:{
        orderTotal: number,
        items : {
            title: string,
            price: number
        }[]
    }
}

export interface ServiceResponse {
    resultCode : number, // 0 = success , other numbers = error
    data : any;
}