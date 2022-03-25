import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-celebrity-list-card',
  templateUrl: './celebrity-list-card.component.html',
  styleUrls: ['./celebrity-list-card.component.scss']
})
export class CelebrityListCardComponent implements OnInit {

  @Input() celebrity!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
