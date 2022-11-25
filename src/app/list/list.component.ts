import { Component, OnInit } from '@angular/core';
import { DeptServiceService } from '../dept-service.service'; //import service 


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  deptdata: any[] = []
  constructor(private deptservice: DeptServiceService) {
    this.deptservice.getDeptList().subscribe(data => { this.deptdata = data })
    console.log(this.deptdata)
  }

  ngOnInit(): void {
  }

}
