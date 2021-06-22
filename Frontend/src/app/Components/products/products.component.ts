import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { ProductService } from './service/product.service';
import { AllProducts } from './service/product.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FileUploadService } from 'src/app/admin/file-upload.service';
import { map } from 'rxjs/internal/operators/map';
import { FileUpload } from 'src/app/admin/file.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  loading:boolean = true;
  products:FileUpload[]=[];
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // obs: Observable<any>;
  // dataSource: MatTableDataSource<FileUpload> = new MatTableDataSource<FileUpload>(this.products);
  filterTerm:string;
  page = 1;
  pageSize =15;
  constructor(private changeDetectorRef: ChangeDetectorRef,
              private productService:ProductService,
              private router:Router,private route:ActivatedRoute,
              private getimagesService:FileUploadService,
              ) {
        
               }

  
  ngOnInit() {
    this.getImages();
    // console.log(this.productService.allProducts);
    // this.changeDetectorRef.detectChanges();
    // this.dataSource.paginator = this.paginator;
    // this.obs = this.dataSource.connect();
  }
  

  showModal: boolean;
  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }


  getImages():void{
    this.getimagesService.getFiles(10000,'/All-Products').snapshotChanges().pipe(
      map(changes =>
        // store the key
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(fileUploads => {
      if(fileUploads){
        this.loading= false;
        this.products = fileUploads;
        // console.log(fileUploads)
        
      }else{
        error=>{
          alert(error);
        }
      }
    });
  
  
  
  }



}
