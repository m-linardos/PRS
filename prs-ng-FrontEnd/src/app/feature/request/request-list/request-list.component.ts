import { Component, OnInit } from '@angular/core';
import { Requests } from '../../../model/requests.class';
import { SystemService } from '../../../service/system.service';
import { RequestService } from '../../../service/request.service';
import { RequestLinesComponent } from '../request-lines/request-lines.component';
import { Users } from '@model/users.class';
import { RequestLineItemService } from '@svc/requestLineItem.service';
import { UserService } from '@svc/user.service';
import { Router } from '@angular/router';
//import { constructor } from 'console';


@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: Requests[];   // property used in component typescript file to store list of requests once the service method is called
  sortCriteria = 'name'; // default sort criteria
  sortOrder = 'asc';
  title = 'Request-List';      // adds [Request-List] to white space between NAV & menu bar
  requestlines: RequestLinesComponent;
  Request: Requests;
  loggedInUser : Users;
  
constructor(private requestSvc: RequestService, 
    private systemSvc: SystemService,
    private userSvc: UserService,
    private router: Router,
    private requestlineItemSvc: RequestLineItemService)  {}  // inject service

  ngOnInit() {
      this.requestSvc.list().subscribe(
        resp => {
          this.requests = resp as Requests[];
          this.loggedInUser = this.systemSvc.data.getLoggedInUser();
          console.log(this.loggedInUser);
}
    );
  }

  sortBy(column: string): void {    // sort by added to nav bar
    if (this.sortCriteria === column) {
      this.sortOrder = (this.sortOrder === 'asc' ? 'desc' : 'asc' );
    } else {
      this.sortCriteria = column;   // can change the column that you want to sort by or the order
      this.sortOrder = 'asc';
    }
  }// Finish updating this and request-list.html later with bootstrap stuff  ex:thead-dark-->

   // populate list of requests
  // check sysservice for logged in request
  // this.loggedInRequest = this.sysSvc.data.Requests.instance;
  // console.log('loggedInRequest = "+this.loggedInRequest.email');
  // this.requestSvc.list().subscribe (
  //   resp => {
  //     this.requests = resp;
  //     console.log(this.requests);
}


