import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      console.log("Nav bar: showAdminBoard = " + this.showAdminBoard);
      this.showModeratorBoard = this.roles.includes('ROLE_ENSEIGNANT');
      console.log("Nav bar: roles = " + this.roles);

      this.username = user.username;
  }
}

logout() {
  this.tokenStorageService.signOut();
  window.location.reload();
}

}
