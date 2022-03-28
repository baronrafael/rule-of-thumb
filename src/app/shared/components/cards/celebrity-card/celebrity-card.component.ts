import { Component, Input, OnInit } from '@angular/core';
import { Celebrity } from 'src/app/shared/interfaces/celebrity';

@Component({
  selector: 'app-celebrity-card',
  templateUrl: './celebrity-card.component.html',
  styleUrls: ['./celebrity-card.component.scss']
})
export class CelebrityCardComponent implements OnInit {

  @Input() celebrity!: Celebrity;
  @Input() celebritys!: Celebrity[];
  @Input() bGridCards!: boolean;

  constructor() { }

  ngOnInit(): void { }

}
