export class person{
    id?: number;
    name: String;
    lastname: String;
    address: String;
    phone: String;
    url_img: String;

    constructor(name: String, lastname: String, address: String, phone: String, url_image: String){
        this.name = name;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
        this.url_img  = url_image;
    }
}