import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingsComponent } from './scrollings.component';

describe('ScrollingsComponent', () => {
  let component: ScrollingsComponent;
  let fixture: ComponentFixture<ScrollingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
