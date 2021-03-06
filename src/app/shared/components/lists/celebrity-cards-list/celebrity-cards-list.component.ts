import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CelebrityService } from 'src/app/core/services/celebrity/celebrity.service';
import { NotificationService } from 'src/app/core/services/notification/notification.service';
import { Celebrity } from 'src/app/shared/interfaces/celebrity';

const MAX_PHONE_SIZE = 767;

@Component({
  selector: 'app-celebrity-cards-list',
  templateUrl: './celebrity-cards-list.component.html',
  styleUrls: ['./celebrity-cards-list.component.scss']
})
export class CelebrityCardsListComponent implements OnInit, OnDestroy {

  celebritys!: Celebrity[];
  bGridCards: boolean = true;

  celebritysSubscription!: Subscription;
  originalCelebritysSubscription!: Subscription;
  subscriptionArray: Subscription[] = [];


  constructor(
    private celebrityService: CelebrityService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.getCelebritys();
  }

  checkScreenSize(event: any) {
    if (event.target.innerWidth <= MAX_PHONE_SIZE) {
      this.bGridCards = true;
    }
  }

  getCelebritys() {
    this.celebritysSubscription = this.celebrityService.getCelebritys()
      .subscribe({
        next: (res: Celebrity[] | undefined) => {
          //console.log(res);
          if (!res) {
            if (!this.celebrityService.getAllFromStorage() || this.celebrityService.getAllFromStorage() === undefined) {
              this.getOriginalCelebritys();
            }
            else {
              this.celebritys = JSON.parse(this.celebrityService.getAllFromStorage() as string);
            }
          }
          else {
            this.celebritys = res;
          }
        },
        error: (err) => {
          //console.error(err);
          this.notificationService.generalErrorMessage();
        }
      });
    this.subscriptionArray.push(this.celebritysSubscription);
  }

  getOriginalCelebritys() {
    this.originalCelebritysSubscription = this.celebrityService.getOriginalData()
      .subscribe({
        next: (res: Celebrity[]) => {
          //console.log(res);
          this.celebritys = res;
          this.celebrityService.setCelebritys(this.celebritys);
        },
        error: (err) => {
          //console.error(err);
          this.notificationService.generalErrorMessage();
        }
      });
    this.subscriptionArray.push(this.originalCelebritysSubscription);
  }

  trackByFn(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this.subscriptionArray.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

}
