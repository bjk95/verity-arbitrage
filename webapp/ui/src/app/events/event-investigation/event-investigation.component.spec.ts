import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInvestigationComponent } from './event-investigation.component';

describe('EventInvestigationComponent', () => {
  let component: EventInvestigationComponent;
  let fixture: ComponentFixture<EventInvestigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInvestigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInvestigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
