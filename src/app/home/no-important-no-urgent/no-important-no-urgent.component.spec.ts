import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoImportantNoUrgentComponent } from './no-important-no-urgent.component';

describe('NoImportantNoUrgentComponent', () => {
  let component: NoImportantNoUrgentComponent;
  let fixture: ComponentFixture<NoImportantNoUrgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoImportantNoUrgentComponent]
    });
    fixture = TestBed.createComponent(NoImportantNoUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
