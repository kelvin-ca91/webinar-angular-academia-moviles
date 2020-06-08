import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoMasTopComponent } from './lo-mas-top.component';

describe('LoMasTopComponent', () => {
  let component: LoMasTopComponent;
  let fixture: ComponentFixture<LoMasTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoMasTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoMasTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
