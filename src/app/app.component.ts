import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  expandIconPosition: 'left' | 'right' = 'left';
  panels = [
    {
      active: true,
      name: 'This is panel header 1',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: true,
      name: 'This is panel header 3'
    }
  ];

  visible = false;
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  isSmallScreen(): boolean {
    return window.innerWidth < 850;
  }
  isBigScreen(): boolean {
    return window.innerWidth > 850;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.hideElementOnResize();
  }

  hideElementOnResize() {
    const elementToHide = document.getElementById('elementToHide');
    const backTopHide = document.getElementById('backTopHide');
    if (elementToHide) {
      elementToHide.hidden = this.isSmallScreen();
    }
    else if (backTopHide) {
      backTopHide.hidden = this.isBigScreen();
    }
  }

  constructor() {
    this.hideElementOnResize();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
