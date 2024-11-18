import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevsInfoPageComponent } from './devs-info-page.component';

describe('DevsInfoPageComponent', () => {
  let component: DevsInfoPageComponent;
  let fixture: ComponentFixture<DevsInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevsInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevsInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
