import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  incrementedValList: Array<number> = new Array<number>();

  onEmitIncrementVal(increment: number) {
    console.log(increment);
    this.incrementedValList.push(increment);
  }
}
