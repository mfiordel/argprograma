export class experience{
    id?: number;
    name_school: String;
    description: String;
    is_actually: boolean;
    url_img: String;
    initial_date: Date;

    constructor(name_school: String, description: String, is_actually: boolean, url_img: String, initial_date: Date){
        this.name_school = name_school;
        this.description = description;
        this.is_actually = is_actually;
        this.url_img = url_img;
        this.initial_date = initial_date;
    }
}