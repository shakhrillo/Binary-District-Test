import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.styl']
})
export class JumbotronComponent implements OnInit {
  @Input() title;
  @Input() content;
  @Input() arrayContent: [];
  constructor() { }

  ngOnInit() {
  }

}
