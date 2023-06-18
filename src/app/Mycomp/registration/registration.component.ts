import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/authservice.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthserviceService, private router: Router) {
  }
  registerform = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])), // validator.compose is func that is usd to combine various validator func into 1
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false)
  }); //builder.group method is used to create an instance of FormGroup, which represents a collection of form controls and their associated values. 

  proceedregistration() {
    if (this.registerform.valid) { 
      this.service.Proceedtoregister(this.registerform.value).subscribe(respose=>{
        this.toastr.success('Registered Successfully')
        this.router.navigate(['login']);//this is to redirect to login screen after registration
      }) // This callback is executed when the HTTP request succeeds
    }
    else { 
      this.toastr.warning('Please enter valid data') }
  }

}
