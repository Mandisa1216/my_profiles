import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScrollFeatureComponent } from './scroll-feature/scroll-feature.component';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ScrollFeatureComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my_profiles';
}
