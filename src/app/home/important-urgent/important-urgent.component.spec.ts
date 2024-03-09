import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantUrgentComponent } from './important-urgent.component';

describe('ImportantUrgentComponent', () => {
  let component: ImportantUrgentComponent;
  let fixture: ComponentFixture<ImportantUrgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantUrgentComponent]
    });
    fixture = TestBed.createComponent(ImportantUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
