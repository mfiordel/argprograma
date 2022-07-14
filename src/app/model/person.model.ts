export class person{
    id?: number;
    name: String;
    lastname: String;
    address: String;
    phone: String;
    url_img: String;
    about_me: String;


    constructor(name: String, lastname: String, address: String, phone: String, url_image: String, about_me: String){
        this.name = name;
        this.lastname = lastname;
        this.address = address;
        this.phone = phone;
        this.url_img  = url_image;
        this.about_me = about_me
        
    }
}