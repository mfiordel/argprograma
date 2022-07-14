export class experience{
    id?: number;
    name_school: String;
    description: String;
    is_actually: boolean;
    url_img: String;
    initial_date: Date;
    end_date: Date;
    person_id: number;

    constructor(name_school: String, description: String, is_actually: boolean, url_img: String, initial_date: Date, end_date: Date, person_id: number){
        this.name_school = name_school;
        this.description = description;
        this.is_actually = is_actually;
        this.url_img = url_img;
        this.initial_date = initial_date;
        this.end_date = end_date;
        this.person_id = person_id;
    }
}