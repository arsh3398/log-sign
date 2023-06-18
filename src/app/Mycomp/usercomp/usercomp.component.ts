import { Component, ViewChild } from '@angular/core';
import { AuthserviceService } from 'src/app/authservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-usercomp',
  templateUrl: './usercomp.component.html',
  styleUrls: ['./usercomp.component.css']
})
export class UsercompComponent {
  constructor(private services: AuthserviceService, private dialogue: MatDialog) { this.loaduser(); }
  userdata: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loaduser() {
    this.services.GetAll().subscribe(response => { this.userdata = response; this.dataSource = new MatTableDataSource(this.userdata); this.dataSource.paginator = this.paginator; this.dataSource.sort = this.sort })
  }
  displayedColumns: string[] = ['Name', 'ID', 'Password', 'Email', 'Gender', 'Role', 'Status', 'Action'];
  Updateuserdata(code: any) {
    const popup = this.dialogue.open(PopupComponent, {
      enterAnimationDuration: '75ms',
      exitAnimationDuration: '75ms',
      width: '25%',
      data: { usercode: code }
    })
    popup.afterClosed().subscribe(res => {this.loaduser() });
  }
  opendialogue() {
    
  }
}
