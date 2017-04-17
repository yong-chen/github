import { Component } from '@angular/core';
import { ProfileComponent } from './components/profile.component';
import { GithubService } from './services/github.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ProfileComponent],
  providers: [GithubService]
})
export class AppComponent  {  name = 'GithubApp' }
