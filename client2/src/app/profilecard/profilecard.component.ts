import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }
  username: string;
  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
  }

}
