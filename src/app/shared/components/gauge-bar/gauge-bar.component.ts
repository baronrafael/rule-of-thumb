import { Component, Input, OnInit } from '@angular/core';
import { Votes } from '../../interfaces/celebrity';

@Component({
  selector: 'app-gauge-bar',
  templateUrl: './gauge-bar.component.html',
  styleUrls: ['./gauge-bar.component.scss']
})
export class GaugeBarComponent implements OnInit {

  @Input() votes!: Votes;

  constructor() { }

  ngOnInit(): void {
  }

}
