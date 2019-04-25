import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachListComponent } from './each-list.component';

describe('EachListComponent', () => {
  let component: EachListComponent;
  let fixture: ComponentFixture<EachListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
