import { Company } from './Company';
import { User } from "./User";
//instructions to every other class
// on how they can be an argument to add 'marker'
interface placed{
    location:{
        lat:number;
        lng:number
    }
    markerContent():string
}
export class CustomMap{
  private  googleMap:google.maps.Map
    constructor(divId:string){
        //we can more more easilly reuse this on future project
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
            zoom: 1,
            center: {
              lat: 0,
              lng: 0,
            },
          });
    }
    addMarker(placed:placed):void{
      const marker=  new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:placed.location.lat,
                lng:placed.location.lng
            }
        })
        marker.addListener('click',()=>{
            const infoWindow = new google.maps.InfoWindow({
                content:placed.markerContent()
            })
            infoWindow.open(this.googleMap,marker)
        })
        
    }
    // addCompanyMarker(company:Company):void{
    //     new google.maps.Marker({
    //         map:this.googleMap,
    //         position:{
    //             lat:company.location.lat,
    //             lng:company.location.lng
    //         }
    //     })
    // }

}