import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityCardsListComponent } from './celebrity-cards-list.component';

describe('CelebrityCardsListComponent', () => {
  let component: CelebrityCardsListComponent;
  let fixture: ComponentFixture<CelebrityCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrityCardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CelebrityCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
