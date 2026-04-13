import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpponentContainer } from './opponent-container';

describe('OpponentContainer', () => {
  let component: OpponentContainer;
  let fixture: ComponentFixture<OpponentContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpponentContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpponentContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
