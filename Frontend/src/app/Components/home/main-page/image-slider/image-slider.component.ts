import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; 

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  sh = true;
  constructor(config: NgbCarouselConfig) { 
    // config.interval = 2000;  
    // config.wrap = true;  
    // config.keyboard = false;  
    // config.pauseOnHover = false;
  }
  
  

  ngOnInit(): void {
  }

}
