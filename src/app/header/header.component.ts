import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
@Injectable({
  providedIn: 'root', // just before your class
})
export class HeaderComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  isLogin: boolean = false;
  ngOnInit(): void {
    this.isLogin = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.isLogin = false;
    this.router.navigateByUrl('common');
  }
}
