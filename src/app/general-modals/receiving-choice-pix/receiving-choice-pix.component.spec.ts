import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivingChoicePixComponent } from './receiving-choice-pix.component';

describe('ReceivingChoicePixComponent', () => {
  let component: ReceivingChoicePixComponent;
  let fixture: ComponentFixture<ReceivingChoicePixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivingChoicePixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceivingChoicePixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
