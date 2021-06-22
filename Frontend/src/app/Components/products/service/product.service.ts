import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';
import { FileUploadService } from 'src/app/admin/file-upload.service';
import { FileUpload } from 'src/app/admin/file.model';
import { AllProducts } from './product.model';

const products:AllProducts[]=[]
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProducts:FileUpload[] = [];
  
  constructor(private getimagesService:FileUploadService,) { }
}
