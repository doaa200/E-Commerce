import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category/category.service';
import { ProductAPIService } from 'src/app/Services/ProductAPI/product-api.service';
import { ICategory } from 'src/app/ViewModel/icategory';
import { IProduct } from 'src/app/ViewModel/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})


export class AddProductComponent implements OnInit {



  newPrd: IProduct={} as IProduct;

  CategoryList:ICategory[]=[];

   response:{ dbpath: ''; } | undefined;

   message:string="";
   progress:number=0;

  constructor( private prdApiserver:ProductAPIService,
    private route:Router,
    private categoryservice:CategoryService,
    private http:HttpClient
    ) {


      this.categoryservice.getAllCateogories().subscribe(catlist=>{
        this.CategoryList=catlist;
        console.log(catlist);

      });




     }

  ngOnInit(): void {


  }


  Saveproduct(){
    // this.newPrd.image=this.newPrd.image.split('\\')[2]
    this.prdApiserver.addNewProduct(this.newPrd).subscribe(prd=>{
      this.route.navigate(['/Products']);
      // this.response?.dbpath


    });

  }

  uploadfile(files:any,Myfile:string)
  {
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post('https://localhost:44386/api/uploads', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress){}
          // this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {

               this.newPrd.image=Myfile.split('\\')[2];
               console.log(this.newPrd.image);
               this.message = 'Upload success.';

          //this.onUploadFinished.emit(event.body);
        }
      },
      //error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}






