import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/ViewModel/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {
  private httpoptions;

  constructor(private httpclient:HttpClient) {
    this.httpoptions={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'

      })

    }
  }
  getProductByID(Id: number): Observable<IProduct>
  {
    return this.httpclient.get<IProduct>(`https://localhost:44386/api/Product/${Id}`)

  }


  getAllProducts():Observable <IProduct[]>
  {

    return this.httpclient.get<IProduct[]>('${environment.APIBaseURL}/api/Product')
  }

  getProductsByCatID(CateogryID: number): Observable<IProduct[]>
  {
    return this.httpclient.get<IProduct[]>(`https://localhost:44386/api/Product/catid?catogid=${CateogryID}`)
  }


 
  addNewProduct(newPrd: IProduct):Observable<IProduct>
  {
    return this.httpclient.post<IProduct>('https://localhost:44386/api/Product',
   JSON.stringify(newPrd),this.httpoptions);
  }


}
