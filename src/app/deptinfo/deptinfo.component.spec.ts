import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptinfoComponent } from './deptinfo.component';

describe('DeptinfoComponent', () => {
  let component: DeptinfoComponent;
  let fixture: ComponentFixture<DeptinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
