import { Component, OnInit } from '@angular/core';
import { DeptServiceService } from '../dept-service.service';
import { IDept } from '../idept';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; // to get info of url

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  deptdata: IDept = { id: 0, name: '', loc: '' }
  id: number = 0

  constructor(private deptservice: DeptServiceService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id') //extract id from url
    this.id = Number(tid)
    this.deptservice.getDept(this.id).subscribe((data: IDept) => {
      this.deptdata = data
      console.log(this.deptdata)
    })
  }

  removeDept(dept: IDept) {
    this.deptdata = dept
    this.deptservice.deleteDept(this.deptdata).subscribe((data: IDept) => {
      alert('Record ' +this.deptdata.name+' deleted')
      this.router.navigate(['/list'])
    })
  }
}
