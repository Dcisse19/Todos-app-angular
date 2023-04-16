import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todos-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private location: Location) {}
  modifyTaskUrl!: boolean;

  ngOnInit(): void {
    this.styleNavOnLocation();
  }

  styleNavOnLocation() {
    this.location.onUrlChange(() => {
      if (this.location.path().includes('modification')) {
        this.modifyTaskUrl = true;
      } else {
        this.modifyTaskUrl = false;
      }
    });
  }
}
