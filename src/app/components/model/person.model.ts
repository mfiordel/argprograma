export class person{
    id?: number;
    name: String;
    lastname: String;
    address: String;
    phone: String;

    constructor(name: String, lastname: String, address: String, phone: String){
        this.name = name;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
    }
}