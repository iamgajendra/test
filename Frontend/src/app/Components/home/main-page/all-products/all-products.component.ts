import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FileUploadService } from 'src/app/admin/file-upload.service';
import { FileUpload } from 'src/app/admin/file.model';
import { productImages } from './product.model';
import { ProductCategoriesService } from './service/product-categories.service';
@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  
  constructor(private getimagesService:FileUploadService,
             private categoriesservice:ProductCategoriesService,
             private router: Router ) { }


  categories:any[]=this.categoriesservice.categories;

  //getting folder form db for different categories
  ImageFolder:any[]=[
    {path:'/Ganesh'},
    {path:'/Durga'},
    {path:'/Marble Mandir'},
    {path:'/Laxmi-Gaytri'},
    {path:'/human-statues'},
    {path:'/color-stones'},
    {path:'/Duttatrye'},
    {path:'/Handicraft'},
    {path:'/Ram Darbar'},
    {path:'/Radha-krishna'},
    {path:'/Sai Baba'},
    {path:'/Shiv'},
  ]
  // fileUpload: FileUpload[] = [];
  ngOnInit(){}


  //get images of specific catigories
    getImages(index:number):void{
      console.log(index)
      const folder = this.ImageFolder[index]
      this.router.navigate(['/category-product'], { queryParams: { productcategory: index } });
      this.getimagesService.getFiles(50,folder.path).snapshotChanges().pipe(
        
        map(changes =>
          // store the key
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      ).subscribe(fileUploads => {
        if(fileUploads){
          
        }else{
          error=>{
            alert(error);
          }
        }
      });
  }
 
}
