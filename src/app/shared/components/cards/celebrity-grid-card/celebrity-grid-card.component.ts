import { Component, Input, OnInit } from '@angular/core';
import { Celebrity } from 'src/app/shared/interfaces/celebrity';

@Component({
  selector: 'app-celebrity-grid-card',
  templateUrl: './celebrity-grid-card.component.html',
  styleUrls: ['./celebrity-grid-card.component.scss']
})
export class CelebrityGridCardComponent implements OnInit {

  @Input() celebrity!: Celebrity;
  @Input() celebritys!: Celebrity[];
  @Input() index!: number;
  bAlreadyVote: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  changeAlreadyVoteValue(value: boolean) {
    this.bAlreadyVote = value;
  }

}
