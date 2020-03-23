import { Component, OnInit } from '@angular/core';
import { MybackService } from 'src/app/services/myback.service';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.scss'],
})
export class MycardComponent implements OnInit {

  constructor(public Myservice:MybackService) { }

  ngOnInit() {

    this.Myservice.arrPersonas
  }

}
