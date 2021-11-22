import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;                  // {1}


  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}

  }
  onLogout(){
    this.authService.logout();                      // {3}
  }

}
