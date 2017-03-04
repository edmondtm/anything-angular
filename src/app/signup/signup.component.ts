import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'any-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  universities : [string] = ['Choose Institution','Universiti Putra Malaysia (UPM)', 'Universiti Kebangsaan Malaysia (UKM)', 'Other Universities', 'Private Sector'];
  

  constructor() { }

  ngOnInit() {
  }

}
