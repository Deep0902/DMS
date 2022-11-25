import { Component, OnInit } from '@angular/core';
import { DeptServiceService } from '../dept-service.service';
import { IDept } from '../idept';
import { ActivatedRoute } from '@angular/router'; // gives info of routing url


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  deptdata: IDept = { id: 0, name: '', loc: '' }
  id: number = 0

  constructor(private deptservice: DeptServiceService, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id') //extract id from url
    this.id = Number(tid)
    this.deptservice.getDept(this.id).subscribe((data: IDept) => {
      this.deptdata = data
      console.log(this.deptdata)
    })
  }

}
