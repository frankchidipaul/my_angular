import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { MainComponent } from './main/main.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainComponent,BodyComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'home';
}
