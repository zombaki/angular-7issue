import { Component, OnInit } from '@angular/core';
import {TestData,SectionTemplate} from '../../test-model';
@Component({
  selector: 'app-child-componenet',
  templateUrl: './child-componenet.component.html',
  styleUrls: ['./child-componenet.component.css']
})
export class ChildComponenetComponent implements OnInit {
movies = new TestData({parent:new SectionTemplate({name : 'TestName'})});
  constructor() { }

  ngOnInit() {
  }

}