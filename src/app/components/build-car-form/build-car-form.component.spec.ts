import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCarFormComponent } from './build-car-form.component';

describe('BuildCarFormComponent', () => {
  let component: BuildCarFormComponent;
  let fixture: ComponentFixture<BuildCarFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildCarFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildCarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
