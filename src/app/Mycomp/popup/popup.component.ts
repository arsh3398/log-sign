import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthserviceService } from 'src/app/authservice.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor(private service: AuthserviceService, private builder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private toastr: ToastrService, private dialog:MatDialogRef<PopupComponent>) { }
  editdata: any
  ngOnInit(): void {
    this.service.Getcompanyroles().subscribe(response => { this.rolelist = response });
    if (this.data.usercode != null && this.data.usercode != '') { this.service.Getbycode(this.data.usercode).subscribe(response => { this.editdata = response;
    this.registerform.setValue({id:this.editdata.id, name:this.editdata.name,password:this.editdata.password,email:this.editdata.email,gender:this.editdata.gender,role:this.editdata.role,isactive:this.editdata.isactive}) }) }
  }
  rolelist: any;
  registerform = this.builder.group({
    id: this.builder.control(''), // validator.compose is func that is usd to combine various validator func into 1
    name: this.builder.control(''),
    password: this.builder.control(''),
    email: this.builder.control(''),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false)
  });

  Updatingdata() {
    if(this.registerform.valid){this.service.Updateuserdata(this.registerform.value.id,this.registerform.value).subscribe(response=>{this.toastr.success('Userdata updated');this.dialog.close();})}
    else{
      this.toastr.warning('Please select role')
    }
  }

}
