import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ColumnNamesService {
    
   private urlColumnNames = 'http://localhost:8080/columnNames'
   private urlVisualizeData = 'http://localhost:8080/visualize?columnName='

  constructor(private http: HttpClient ) { }
   
   getColumnNames(): Observable<string[]> {
       return this.http.get<string[]>( this.urlColumnNames )
           .pipe(
           catchError( this.handleError( 'getColumnNames', [] ) )
           );
   }
   
   getVisualize(columnNameValue: string): Observable<VisualizeResponse> {
       return this.http.get<VisualizeResponse> (this.urlVisualizeData + columnNameValue);
   }

   /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
   private handleError<T>( operation = 'operation', result?: T ) {
       return ( error: any ): Observable<T> => {

           // TODO: send the error to remote logging infrastructure
           console.error( error ); // log to console instead

           // TODO: better job of transforming error for user consumption
           // TODO: check Angular DOCUMENTATION for logs and messageService
           // this.log(`${operation} failed: ${error.message}`);

           // Let the app keep running by returning an empty result.
           return of( result as T );
       };
   }
}
