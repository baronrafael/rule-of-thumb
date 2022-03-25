import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityListCardComponent } from './celebrity-list-card.component';

describe('CelebrityListCardComponent', () => {
  let component: CelebrityListCardComponent;
  let fixture: ComponentFixture<CelebrityListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrityListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
