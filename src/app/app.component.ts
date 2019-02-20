import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'data-table';
  sourceData: any;
  options: any;
  constructor() {
    this.sourceData = [
      { firstName: 'Sachin', lastName: 'Tendulkar', age: 25, number: 989898 },
      { firstName: 'Ross', lastName: 'Taylor', age: 25, number: 989898 },
      { firstName: 'Andrew', lastName: 'Symonds', age: 25, number: 989898 },
      { firstName: 'Virat4', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat5', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat6', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat7', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat8', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat9', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat10', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat11', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat12', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat13', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat14', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat15', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat16', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Virat17', lastName: 'Kohli', age: 25, number: 989898 },
      { firstName: 'Rohit18', lastName: 'Sharma', age: 25, number: 989898 }
    ];
    this.options = {
      disabed: false,
      resizable: false,
      sort: false,
      search: false,
      pagination: true,
      paginationOptions: {
        activePage: 1,
        rowsOnPage: 5,
        rowsOnPageOptions: [5, 10, 25]
      },
      headers: { firstName: "First Name", lastName: "Last Name", age: "Age" }
    }
  }
  ngOnInit() {

  }
}
