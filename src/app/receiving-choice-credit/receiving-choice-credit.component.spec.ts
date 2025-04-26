import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingChoiceCheckinComponent } from './receiving-choice-credit.component';

describe('ReceivingChoiceCheckinComponent', () => {
  let component: ReceivingChoiceCheckinComponent;
  let fixture: ComponentFixture<ReceivingChoiceCheckinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingChoiceCheckinComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceivingChoiceCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
