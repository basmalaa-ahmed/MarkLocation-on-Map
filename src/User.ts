import {  faker, th } from "@faker-js/faker";
export class User{
    name:string;
    location:{
        lat:number;
        lng:number;
    };
    constructor(){
        this.name=faker.name.firstName();
        this.location ={
            lat : faker.address.latitude(),
            lng: faker.address.longitude()
        }
};
    markerContent():string{
        return `
        <h2>User Name: ${this.name}</h2>
        `
}
}