import { Component, OnInit,EventEmitter,Output,ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginform/loginservice.service';
import { Subscription,fromEvent  } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserIdleService } from 'angular-user-idle';
import * as $ from 'jquery';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent implements OnInit {
  subscription: Subscription;
  @Output() changeIdleValues = new EventEmitter();
  idle: number;
  timeout: number;
  ping: number;
  lastPing: string;
  isWatching: boolean;
  isTimer: boolean;
  timeIsUp: boolean;
  timerCount: number;
  private timerStartSubscription: Subscription;
  private timeoutSubscription: Subscription;
  private pingSubscription: Subscription;

  constructor(private loginservice:LoginserviceService,private router: Router,private userIdle: UserIdleService,private element: ElementRef) { }
  
 
  ngOnInit() {

    $(document).ready(function(){
      $('[data-toggle="offcanvas"]').click(function(){
          $("#navigation").toggleClass("hidden-xs");
      });
   });
   
   
   
   

    this.onStartWatching();
    this.idle = this.userIdle.getConfigValue().idle;
    this.timeout = this.userIdle.getConfigValue().timeout;
    this.ping = this.userIdle.getConfigValue().ping;
    this.changeIdleValues.emit({
      idle: this.idle,
      timeout: this.timeout,
      ping: this.ping
    });
  
    fromEvent(window, 'scroll')
    .subscribe(e => {
   
      this.onResetTimer();
    });
    fromEvent(document, 'mousemove')
    .subscribe(e => {
   
      this.onResetTimer();
    });
  }
  logout(){
    this.loginservice.logout();
    this.router.navigate(['/Login'])
  }
  onStartWatching() {
    this.isWatching = true;
    this.timerCount = this.timeout;
  
    
    this.userIdle.stopWatching();    
    this.userIdle.setConfigValues({
      idle: 1,
      timeout: 100,
      ping: 1
    });

    // Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.timerStartSubscription = this.userIdle.onTimerStart()
      .pipe(tap(() => this.isTimer = true))
      .subscribe(count => this.timerCount = count);

    // Start watch when time is up.
    this.timeoutSubscription = this.userIdle.onTimeout()
      .subscribe(() => {
        this.onStopWatching()
      
        this. logout();
       
    });

    this.pingSubscription = this.userIdle.ping$
      .subscribe(value => this.lastPing = `#${value} at ${new Date().toString()}`);
  }
  onStopWatching() {
    this.userIdle.stopWatching();
    this.timerStartSubscription.unsubscribe();
    this.timeoutSubscription.unsubscribe();
    this.pingSubscription.unsubscribe();
    this.isWatching = false;
    this.isTimer = false;
    this.timeIsUp = false;
    this.lastPing = null;
   // console.log("Session stop watching");
  }
  onStopTimer() {
  //  console.log("Session stop timer");
    this.userIdle.stopTimer();
    this.isTimer = false;
  }
  onResetTimer() {
    this.userIdle.resetTimer();
    this.isTimer = false;
    this.timeIsUp = false;
  }
   

}
