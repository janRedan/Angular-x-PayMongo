import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

constructor(private http:HttpClient) { }

  private clientSecret:string;
  private httpOptions:any;
  private apiUrl = 'https://api.paymongo.com/v1/';

  setClientSecret(secret:string){
    this.clientSecret = secret;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': "Basic " +btoa(this.clientSecret)
      })
    };
  }

  

  createPaymentMethod(data): Observable<any> {
        
       return this.http.post(this.apiUrl+'payment_methods',data,this.httpOptions).pipe(
          map((data: any) => {
            return data;
          }),
         catchError((error: HttpErrorResponse) => {
           return throwError(error);
         })
        )
  }

  createPaymentIntent(data): Observable<any> {

   return this.http.post(this.apiUrl+'payment_intents',data,this.httpOptions).pipe(
      map((data: any) => {

        return data;
      }),
     catchError((error: HttpErrorResponse) => {
       return throwError(error);
     })
    )    
  }

  attachPaymentIntent(id,data): Observable<any> {

    return this.http.post(this.apiUrl+'payment_intents/'+id+'/attach',data,this.httpOptions).pipe(
       map((data: any) => {

         return data;
       }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
     )
   }
   
   
   BayadBills(): Observable<any> {

    this.httpOptions = {
      headers: new HttpHeaders({
        'X-MECOM-PARTNER-SECRET': "fTiQ3c60X3ej3p58830OL1Peu8wKnHleNqF6maQJyGNEYkyBEuZ0N6JCtcU6Jtpmjqz1CQttpREzc4jcxu1rhjF3TTWwADRZfCItnL1KoqFHwT8hlGiqrR4uCCQpqO7L"
      })
    };
    debugger;
    return this.http.get("https://uat-partners2.multipay.ph/api/v3/billers").pipe(
       map((data: any) => {
        debugger;
         return data;
       }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
     )
   }

}
