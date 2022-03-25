import { Component, Input, OnInit } from '@angular/core';
import { CelebrityService } from 'src/app/core/services/celebrity/celebrity.service';
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
  selectedVote!: number | undefined;
  bAlreadyVote: boolean = false;

  constructor(private celebrityService: CelebrityService) { }

  ngOnInit(): void {
  }

  selectVoteUp(){
    this.selectedVote = 1;
  }

  selectVoteDown(){
    this.selectedVote = -1;
  }

  vote(){
    if(this.selectedVote === 1) {
      this.celebrity.votes.positive++;
    }
    else if(this.selectedVote === -1) {
      this.celebrity.votes.negative++;
    }
    this.celebrityService.setCelebritys(this.celebritys);
    this.bAlreadyVote = true;
  }

  voteAgain() {
    this.selectedVote = undefined;
    this.bAlreadyVote = false;
  }


}
