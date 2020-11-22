import { Component } from '@angular/core';

import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { OddsResponse } from './models/odds-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | undefined;

  constructor(private appService: AppService) {
    this.appService.getWelcomeMessage().subscribe((data: any) => {
      this.title = data.content;
    });
  }



}

