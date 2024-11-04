import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruductListComponent } from './pruduct-list.component';

describe('PruductListComponent', () => {
  let component: PruductListComponent;
  let fixture: ComponentFixture<PruductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PruductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
