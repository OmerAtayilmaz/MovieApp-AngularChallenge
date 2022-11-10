import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondmenuComponent } from './secondmenu.component';

describe('SecondmenuComponent', () => {
  let component: SecondmenuComponent;
  let fixture: ComponentFixture<SecondmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
