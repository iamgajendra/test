import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileUploadService } from 'src/app/admin/file-upload.service';
import { FileUpload } from 'src/app/admin/file.model';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
  // images:FileUpload[]=[];
  id:number;
  loading:boolean = true;
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
  fileUpload: FileUpload[] = [];
  page = 1;
  pageSize = 12;
  constructor(private route: ActivatedRoute,
                private getimagesService:FileUploadService,
                private changeDetectorRef: ChangeDetectorRef,
             ){}
  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.id = params['productcategory']
    });
    
    this.getImages(this.id);

    
    
    // console.log(this.images)

}


getImages(index:number):void{
  console.log(index)
  const folder = this.ImageFolder[index]
  this.getimagesService.getFiles(10000,folder.path).snapshotChanges().pipe(
    map(changes =>
      // store the key
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    )
  ).subscribe(fileUploads => {
    if(fileUploads){
      this.fileUpload = fileUploads;
      this.loading = false;
      // console.log(fileUploads)
      
    }else{
      error=>{
        alert(error);
      }
    }
  });



}
}
