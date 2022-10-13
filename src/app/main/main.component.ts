import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public date: string = "1999-11-14T00:00:00";
  public birthdate: Date = new Date(this.date);
  public age: number = 0;

  constructor(){ }

  ngOnInit(): void {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }
}
