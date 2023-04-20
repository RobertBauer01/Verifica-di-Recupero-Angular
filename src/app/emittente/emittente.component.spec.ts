import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmittenteComponent } from './emittente.component';

describe('EmittenteComponent', () => {
  let component: EmittenteComponent;
  let fixture: ComponentFixture<EmittenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmittenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmittenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
