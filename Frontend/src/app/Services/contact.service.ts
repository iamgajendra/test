import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

conatactviawhatsapp(){
   return this.http.get('http://localhost:3000/whatsapp').subscribe((data:any)=>{
    if(data){
      console.log(data.message);
      window.open(data.message,"_blank");
    }
  })
}

conatactviacall(){
    window.open('tel://+916350639063',
    "_blank");
  }


conatactviaemail(){
  window.open('mailto:umadadhich123@gmail.com?subject=Order Enquiry &body=Description',
    "_blank");
}

}