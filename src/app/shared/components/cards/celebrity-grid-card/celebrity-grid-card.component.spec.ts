import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityGridCardComponent } from './celebrity-grid-card.component';

describe('CelebrityGridCardComponent', () => {
  let component: CelebrityGridCardComponent;
  let fixture: ComponentFixture<CelebrityGridCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrityGridCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
