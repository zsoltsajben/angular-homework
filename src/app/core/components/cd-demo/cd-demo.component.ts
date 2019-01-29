import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cd-demo',
  templateUrl: './cd-demo.component.html',
  styleUrls: ['./cd-demo.component.scss'],
  // changeDetection: ChangeDetectionStrategy.Default
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdDemoComponent implements OnInit {

  @Input() model: any;

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  update(): void {
    this.cdRef.markForCheck();
  }
}
