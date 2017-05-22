import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() emitIncrementedVal: EventEmitter<number> = new EventEmitter<number>();
  intervalRef: any;
  incrementVal: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onStartClick() {
    this.intervalRef = setInterval(() => {
      this.incrementValue();
    }, 1000);
  }

  onStopClick() {
    clearInterval(this.intervalRef);
  }

  private incrementValue() {
    this.incrementVal++;
    this.emitIncrementedVal.emit(this.incrementVal);
  }
}
