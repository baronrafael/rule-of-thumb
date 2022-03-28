import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityCardButtonsComponent } from './celebrity-card-buttons.component';

describe('CelebrityCardButtonsComponent', () => {
  let component: CelebrityCardButtonsComponent;
  let fixture: ComponentFixture<CelebrityCardButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrityCardButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityCardButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
