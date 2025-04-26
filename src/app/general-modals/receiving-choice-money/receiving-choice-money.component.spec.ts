import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingChoiceMoneyComponent } from './receiving-choice-money.component';

describe('ReceivingChoiceMoneyComponent', () => {
  let component: ReceivingChoiceMoneyComponent;
  let fixture: ComponentFixture<ReceivingChoiceMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingChoiceMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingChoiceMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
