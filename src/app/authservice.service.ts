import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  apiURL = 'http://localhost:3000/users';
  GetAll() {
    return this.http.get(this.apiURL);
  }//This method is to get data of all the registered users
  Getbycode(code: any) {
    return this.http.get(this.apiURL + '/' + code);
  }
  Proceedtoregister(inputdata: any) {
    return this.http.post(this.apiURL, inputdata);
  }//this method is to save data into our json server for new registrations
  Updateuserdata(code: any, inputdata: any) {
    return this.http.put(this.apiURL + '/' + code, inputdata);
  }//this method is to update data into our json server

  Isloggedin(){
    return sessionStorage.getItem('username')!=null;
  };
  GetUserrole(){
    return sessionStorage.getItem('role')!=null?sessionStorage.getItem('role')?.toString():'';
  }
  Getcompanyroles(){
    return this.http.get(" http://localhost:3000/roles"); 
  };
}
