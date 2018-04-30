import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dateitem',
  /*templateUrl: './dateitem.component.html',
  styleUrls: ['./dateitem.component.css']*/
  template: `
    <div class="cursosdesarrolloweb-add">
      <h3>Cursosdesarrolloweb</h3>
      <h4>{{ data.name }}</h4>
      <p>Precio: {{ data.price }}</p>
      <p>{{ data.info }}</p>
    </div>
  `,
  styles: [`
    .cursosdesarrolloweb-add {
      border: 1px solid gray;
      padding: 5px;
      padding-bottom: 20px;
      padding-left: 20px;
      border-radius: 10px;
      background-color: goldenrod;
      color: black;
    }
  `]
})
export class DateitemComponent implements OnInit {

  constructor() { }

  @Input() data: any;
  ngOnInit() {
  }

}
