import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from 'src/app/Services/contact.service';
import { MailService } from 'src/app/Services/mail.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private contactservice:ContactService,
              private mailservice:MailService,
              ) { }

  ngOnInit(): void {
  }
  buttontext="Place Order";
  ThankuMessage:string;
  redirectingmessage:string;


  placeOrder(orderForm:NgForm){
    this.buttontext ="...."
    let user = {
        name: orderForm.value.firstName + orderForm.value.lastName,
        email:orderForm.value.email,
        message: "My Order : " + orderForm.value.order + "\nProposal Money : " +orderForm.value.money  + "\nMobile Number :" + orderForm.value.number

    }
    console.log(user);
     this.mailservice.mail('http://localhost:3000/orderemail',user)
     .subscribe(data=>{
       if(data){
         this.buttontext = "Order Placed";
         this.ThankuMessage ="Thanks for your order😃🤗 ! We will contact you soon!"
          console.log(data);
       }
     })
  }


  whatapp(){
    this.redirectingmessage =" redirecting to whatsapp page....";
    this.contactservice.conatactviawhatsapp();
    
  }


  phone(){
    this.redirectingmessage =" Making phone call..📲";
    this.contactservice.conatactviacall();
  }


  mail(){
    this.redirectingmessage =" Redirecting to mail page....";
    this.contactservice.conatactviaemail();
  }

}
