export class Experience{
    id?: number;
    name_school: String;
    is_actually: boolean;
    initial_date: Date;
    end_date: Date;
    description: String;
    url_img: String;
    style: String;
    
    constructor(name_school: String, is_actually: boolean, initial_date: Date, end_date: Date, description: String,  url_img: String, style: String){
        this.name_school = name_school;
        this.initial_date = initial_date;
        this.end_date = end_date;
        this.is_actually = is_actually;
        this.description = description;
        this.url_img = url_img;
        this.style = style;
    }
}