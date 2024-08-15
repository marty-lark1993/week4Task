export class User{
    username: string;
    DOB: string;
    age: number;
    email: string;
    password: string;
    valid: boolean

    constructor(username: string, DOB:string, age: number, email: string, password: string, valid: boolean){
        this.username = username;
        this.DOB = DOB;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}