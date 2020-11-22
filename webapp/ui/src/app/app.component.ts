import { Component } from '@angular/core';

import { AppService } from './app.service';
import { OddsResponse } from './models/odds-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string | undefined;
  postRequestResponse: OddsResponse | undefined;
  tableHeaders = Array( "teams", "date", "sport", "bestMargin")

  constructor(private appService: AppService) {
    this.appService.getWelcomeMessage().subscribe((data: any) => {
      this.title = data.content;
    });
  }

  /**
   * This method is used to test the post request
   */
  public postData(): void {
    this.appService.sendData().subscribe((data: OddsResponse) => {
      this.postRequestResponse = data;
    });
  }

}

