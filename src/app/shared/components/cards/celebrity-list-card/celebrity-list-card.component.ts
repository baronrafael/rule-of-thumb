import { Component, Input, OnInit } from '@angular/core';
import { Celebrity } from 'src/app/shared/interfaces/celebrity';

@Component({
  selector: 'app-celebrity-list-card',
  templateUrl: './celebrity-list-card.component.html',
  styleUrls: ['./celebrity-list-card.component.scss']
})
export class CelebrityListCardComponent implements OnInit {

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
