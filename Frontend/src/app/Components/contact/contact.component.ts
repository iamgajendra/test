import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MailService } from 'src/app/Services/mail.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  buttonText = "Send Message";
  constructor(private http: HttpClient,private mail:MailService) { }

  ngOnInit(): void {
  }
  
  sendMessage(contactForm:NgForm){
    this.buttonText = "Sending..."
    let user = {
       email : contactForm.value.email,
       message : contactForm.value.message,
    }
    this.mail.mail('http://localhost:3000/email',user).subscribe(
      data=>{
        if(data){
          this.buttonText = "Mail Sent Successfully!"
          console.log(
            'mail sent'
          );
        } 
      },
      err=>{
        this.buttonText ="Mail not sent!"
        console.log(err); 
      }
    )
  }
}
