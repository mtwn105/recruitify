import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardComponentComponent } from './job-card-component.component';

describe('JobCardComponentComponent', () => {
  let component: JobCardComponentComponent;
  let fixture: ComponentFixture<JobCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobCardComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
