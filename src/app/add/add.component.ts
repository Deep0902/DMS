import { Component, OnInit } from '@angular/core';
import { DeptServiceService } from '../dept-service.service';
import { IDept } from '../idept';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  deptdata: IDept = { id: 0, name: '', loc: '' }

  constructor(private deptservice: DeptServiceService, private router: Router) {

  }
  //will call service
  saveDept(dept: IDept) {
    this.deptdata = dept
    this.deptservice.addDept(this.deptdata).subscribe(() => {
      alert('Record inserted in database')
      this.router.navigate(['/list'])
    })
  }

  ngOnInit(): void {

  }

}
