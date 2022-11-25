import { Component, OnInit } from '@angular/core';
import { DeptServiceService } from '../dept-service.service';
import { IDept } from '../idept';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // to get info of url

@Component({
  selector: 'app-deptinfo',
  templateUrl: './deptinfo.component.html',
  styleUrls: ['./deptinfo.component.css']
})
export class DeptinfoComponent implements OnInit {
  deptdata:any[]=[]
  constructor(private deptservice:DeptServiceService) {
    this.deptservice.showdeptinfo().subscribe(data=>{
      this.deptdata = data
    })
   }

  ngOnInit(): void {
  }

}
