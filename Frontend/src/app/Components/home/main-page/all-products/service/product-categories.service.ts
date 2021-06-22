import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {
  categories:any[]=[
    {
      img:"../../../../../assets/ganesh.jpg",
      type:"Ganesh Ji",
    },
    {
      img:"../../../../../assets/Durga.jpg",
      type:"Durga Mata",
    },
    {
      img:"../../../../../assets/marble-mandir.jpg",
      type:"Marble Mandir",
    },
    {
      img:"../../../../../assets/laxmi.jpg",
      type:"Laxmi-Gaytri",
    },
    {
      img:"../../../../../assets/statues.jpg",
      type:"Human Statues",
    },
    {
      img:"../../../../../assets/color-stone.jpg",
      type:"Color-Stone",
    },
    {
      img:"../../../../../assets/146111.0.jpg",
      type:"Duttatrye",
    },
    {
      img:"../../../../../assets/Handicraft.jpg",
      type:"Handicraft",
    },
    {
      img:"../../../../../assets/ramdarbar.jpg",
      type:"Ram Darbar",
    },
    {
      img:"../../../../../assets/radhakrishna.jpg",
      type:"Radha Krishna",
    },
    {
      img:"../../../../../assets/saibaba.jpg",
      type:"Sai Baba",
    },
    {
      img:"../../../../../assets/shiv.jpg",
      type:"Shiv Pariwar",
    },
    
  ]
  constructor() { }
}
