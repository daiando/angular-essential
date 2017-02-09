import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnChanges() {
    this.log('ngOnchanges')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    this.log('ngOnDestroy')
  }

  private log(hook: string){
    console.log(hook);
  }

}
