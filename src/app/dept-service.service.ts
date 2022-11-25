import { Injectable } from '@angular/core';
import { IDept } from './idept';
import { HttpClient } from '@angular/common/http'; //to create and use web api
import { HttpHeaders } from '@angular/common/http'; //to use xml json
import { Observable } from 'rxjs'; //async tasks
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {
  url = "http://localhost:33190/Dept/"
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  constructor(private httpclient: HttpClient) { }
  //web api service
  getDeptList(): Observable<any> {
    return this.httpclient.get<any[]>(this.url + 'ListDept')
  }

  getDept(id: number): Observable<IDept> {
    return this.httpclient.get<IDept>(this.url + 'ListDept/' + id).pipe(catchError(this.handleError)) //.pipe to capture errors
  }

  //add record into database
  addDept(deptData: IDept): Observable<IDept> {
    return this.httpclient.post<IDept>(this.url + 'AddDept/', deptData, this.httpOptions).pipe(catchError(this.handleError))
  }

  editDept(deptdata: IDept): Observable<IDept> {            //deptdata.id is already fetched, we're passing it to make changes
    return this.httpclient.put<IDept>(this.url + 'EditDept/' + deptdata.id, deptdata, this.httpOptions).pipe(catchError(this.handleError))
  }

  deleteDept(deptdata: IDept): Observable<IDept> {            //deptdata.id is already fetched, we're passing it to make changes
    return this.httpclient.delete<IDept>(this.url + 'DeleteDept/' + deptdata.id).pipe(catchError(this.handleError))
  }

  showdeptinfo(): Observable<any> {
    return this.httpclient.get<any[]>(this.url + 'ShowInfo')
  }

  handleError(error: HttpErrorResponse) {
    let errmsg = error.status + '\n' + error.statusText + '\n' + error.error
    alert(errmsg)
    return throwError(errmsg)
  }


}
