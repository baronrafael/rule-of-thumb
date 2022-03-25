import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-celebrity-grid-card',
  templateUrl: './celebrity-grid-card.component.html',
  styleUrls: ['./celebrity-grid-card.component.scss']
})
export class CelebrityGridCardComponent implements OnInit {

  @Input() celebrity!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
