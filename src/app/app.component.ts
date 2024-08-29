import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {UserDialogComponent} from "./user-dialog/user-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'demo-front';
  displayedColumns = ['historyId', 'movieId', 'userId', 'watchDate', 'watchTime'];
  data = [];

  constructor(private http: HttpClient, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8084/api/movies/get-all-movies').subscribe({
      next: data => {
        this.data = data;
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }







}
