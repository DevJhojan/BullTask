import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantNoUrgentComponent } from './important-no-urgent.component';

describe('ImportantNoUrgentComponent', () => {
  let component: ImportantNoUrgentComponent;
  let fixture: ComponentFixture<ImportantNoUrgentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImportantNoUrgentComponent]
    });
    fixture = TestBed.createComponent(ImportantNoUrgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
