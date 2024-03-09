import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoImportantUrgentComponent } from './no-important-urgent.component';

describe('NoImportantUrgentComponent', () => {
  let component: NoImportantUrgentComponent;
  let fixture: ComponentFixture<NoImportantUrgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoImportantUrgentComponent]
    });
    fixture = TestBed.createComponent(NoImportantUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
