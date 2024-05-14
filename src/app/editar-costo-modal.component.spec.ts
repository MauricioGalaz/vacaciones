import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditarCostoModalComponent } from './editar-costo-modal.component';

describe('EditarCostoModalComponent', () => {
  let component: EditarCostoModalComponent;
  let fixture: ComponentFixture<EditarCostoModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [EditarCostoModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCostoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
