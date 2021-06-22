import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/Services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
  }
  allProducts:any[]=[
    'Ganesh',
    'Durga Mata',
    'Marble Mandir',
    'Laxmi Mata',
    'Gaytri Mata',
    'Human Statues',
    'Color-Stone',
    'Duttatrye',
    'Handicraft',
    'Ram Darbar',
    'Radha Krishna',
    'Sai Baba',
    'Shiv Parivar',
    'Ladu Gopal',
    'Hunuman ji',
    'Garud Ji',
    'Brahma Ji',
    'Shrinath Ji',
    'Santosi Mata',
    'Triputi Balaji',
    'Khatu Shyam Ji',
    'Laxmi Narayan',
    'Ganga Mata',
    'Swami Narayan',
    'Saraswati Mata',
    'Amba Mata',
    'Kabeer Ji',
    'Budda',
    'Bhairu Ji',
    'Color-Stone',
    'Gajanand Baba',
    'Laxmi-Narayana'

  ]

  whatsapp(){
    this.contactService.conatactviawhatsapp();
  }
  phone(){
    this.contactService.conatactviacall();
  }
  mail(){
    this.contactService.conatactviaemail();
  }

}
