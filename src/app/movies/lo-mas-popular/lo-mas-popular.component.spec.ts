import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoMasPopularComponent } from './lo-mas-popular.component';

describe('LoMasPopularComponent', () => {
  let component: LoMasPopularComponent;
  let fixture: ComponentFixture<LoMasPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoMasPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoMasPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
