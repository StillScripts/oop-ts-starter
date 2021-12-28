import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OopConceptsComponent } from './oop-concepts.component';

describe('OopConceptsComponent', () => {
  let component: OopConceptsComponent;
  let fixture: ComponentFixture<OopConceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OopConceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OopConceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
