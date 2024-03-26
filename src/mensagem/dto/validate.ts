export class validate{
    username: string
    password: string
    created_at: Date
    id:number
    text:string
    username1:string
    constructor(username, password:string, created_at, id, text, username1){
        this.password=password;
        this.username=username;

        this.created_at=created_at
        this.id=id
        this.text=text
        this.username1=username1
    }
}