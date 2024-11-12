import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleWindowCardComponent } from './module-window-card.component';

describe('ModuleWindowCardComponent', () => {
  let component: ModuleWindowCardComponent;
  let fixture: ComponentFixture<ModuleWindowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleWindowCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleWindowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
