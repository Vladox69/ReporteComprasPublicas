import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-date-form',
  templateUrl: './date-form.component.html',
  styleUrls: ['./date-form.component.css']
})
export class DateFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  dateForm=new FormGroup({
    fromDate:new FormControl('',[Validators.required]),
    toDate:new FormControl('',[Validators.required])
  })


}
