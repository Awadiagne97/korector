import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {CreateSectionComponent} from './createSection.component';

describe('CreateSectionComponent', () => {
  let component: CreateSectionComponent;
  let fixture: ComponentFixture<CreateSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
