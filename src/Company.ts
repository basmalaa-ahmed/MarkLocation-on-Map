import {  faker } from "@faker-js/faker";
export class Company{
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number
    }
    constructor(){
        this.companyName=faker.company.name();
        this.catchPhrase=faker.company.catchPhrase();
        this.location={
            lat:faker.address.latitude(),
            lng:faker.address.longitude(),
        };
        
    };
    markerContent():string{
        return `
        <h2>Company Name: ${this.companyName}</h2>
        <h3>Company catchPhrase: ${this.catchPhrase}</h3>
        `}
}