export class ContactMessage {
  constructor(
    public subject:string,
    public message:string,
    public category:string,
    public email:string,
    public phone:number,
    public status:string
  ){ }
}
