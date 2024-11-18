import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SysInfoPageComponent } from './sys-info-page.component';

describe('SysInfoPageComponent', () => {
  let component: SysInfoPageComponent;
  let fixture: ComponentFixture<SysInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SysInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SysInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
