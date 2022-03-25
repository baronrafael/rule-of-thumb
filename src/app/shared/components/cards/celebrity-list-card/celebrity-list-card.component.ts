import { Component, Input, OnInit } from '@angular/core';
import { CelebrityService } from 'src/app/core/services/celebrity/celebrity.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
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
  selectedVote!: number | undefined;
  bAlreadyVote: boolean = false;

  constructor(
    private celebrityService: CelebrityService,
    private notificationService: NotificationService
  ) { }

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
    this.notificationService.successMessage('You have just successfully voted!');
  }

  voteAgain() {
    this.selectedVote = undefined;
    this.bAlreadyVote = false;
  }

}
