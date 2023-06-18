import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthserviceService, private router: Router) {
    sessionStorage.clear()//to clear session storage as soon as page loads so that we will be able to run our auth serives.
  }
  userdata:any;
  loginform=this.builder.group({
    username:this.builder.control('',Validators.required),
    password:this.builder.control('',Validators.required)
  });
  proceedLogin() {
    if (this.loginform.valid) { 
      this.service.Getbycode(this.loginform.value.username).subscribe(response=>{
        this.userdata=response;
        console.log(this.userdata)
        if(this.userdata.password===this.loginform.value.password){
          if(this.userdata.isactive){
            sessionStorage.setItem('username',this.userdata.username);
            sessionStorage.setItem('userrole',this.userdata.role);
            this.router.navigate(['']);
          }
          else{this.toastr.warning('Inactive userdata')}
        }
        else{this.toastr.warning('Inavlid credentials')}
      })
    }
    else { 
      this.toastr.warning('Please enter valid data') }
  }
}
