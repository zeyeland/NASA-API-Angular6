import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';
import { Nasa } from '../nasa';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  apod: Nasa;

  constructor(private nasaServies: NasaService) { }

  ngOnInit() {
    this.getApod();
  }

  getApod(): void{
    let date = this.randomDate(new Date(1995, 5, 16), new Date() );
    this.nasaServies.getApod(date).subscribe(apod => this.apod = apod);
  }

  onSubmit(): void {
    this.getApod();
  }

  randomDate(start, end): string {
    //Randomize the date https://gist.github.com/miguelmota/5b67e03845d840c949c4
    var date = new Date(start.getTime() + Math.random() *
    (end.getTime() - start.getTime()));

    //Format the date
    let d:any =  date.getDate();
    let m:any = date.getMonth() + 1; //In JS months start at 0
    let y:any = date.getFullYear();

    //Change the maonth and day strings so that they match the documented format.
    if(m < 10){
      m = '0'+m
    }

    if(d < 10){
      m = '0'+d
    }

    return y + '-' + m + '-' + d;
  }

}
