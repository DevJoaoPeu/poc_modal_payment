import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingChoiceDebitComponent } from './receiving-choice-debit.component';

describe('ReceivingChoiceDebitComponent', () => {
  let component: ReceivingChoiceDebitComponent;
  let fixture: ComponentFixture<ReceivingChoiceDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingChoiceDebitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingChoiceDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
