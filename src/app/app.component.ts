import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  private y = 40;
  private space = 7;
  private top: HTMLElement
  private sausage: HTMLElement
  private bottom: HTMLElement
  private topY;
  private sausageY;
  private bottomY;
  private sausageRotation;
  private mousePressed = false;

  ngOnInit(): void {
    this.top = this.getElement('rect815');
    this.sausage = this.getElement('rect828');
    this.bottom = this.getElement('rect830');
    this.setAttribute();
  }

  getElement(id: string) {
    return window.document.getElementById(id);
  }

  setAttribute() {
    this.topY = this.y + '%'
    this.sausageY = this.y + this.space + '%'
    this.bottomY = this.y + this.space * 2 + '%'
    this.top.style['x'] = (window.innerWidth - Number(this.top.getAttribute("width").split('p')[0])) / 2;
    this.bottom.style['x'] = (window.innerWidth - Number(this.bottom.getAttribute("width").split('p')[0])) / 2;
  }

  resize() {
    this.setAttribute();
  }

  mouseMove(event){
    if(this.mousePressed){
      this.getElement('svg').style.transform = 'rotate(' + this.map(event.clientY, 0, window.innerHeight, 0, 360) + this.space + 'deg)'
    }
  }

  mouseUp(){
    this.mousePressed = false;
    console.log('up')
  }

  mouseDown(){
    this.mousePressed = true;
    console.log('down')

  }

  map(x, a, b, c, d){
    let y = (x-a)/(b-a) * (d+c) + c;
    return y
  }
}
