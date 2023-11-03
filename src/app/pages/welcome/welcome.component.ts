import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() { }


   handleChange(link: string): void {
    console.log('Anchor:OnChange', link);
  }

  ngOnInit() {

  }

}
