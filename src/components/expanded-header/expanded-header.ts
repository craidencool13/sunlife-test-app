import { Component, Input, Output, EventEmitter } from '@angular/core';
import {UserInterface} from '../../providers/interface/user-interface'
import * as moment from 'moment';

@Component({
  selector: "expanded-header",
  templateUrl: "expanded-header.html",
})
export class ExpandedHeaderComponent {
  @Input() activeMenu: String;
  @Input() user: UserInterface;
  @Output() menuClicked = new EventEmitter()

  constructor() {}
  
  selectMenu(menu){
    this.menuClicked.emit({value: menu})
  }

  getGreetings(){
    var m = moment();
    if(!m || !m.isValid()) { return 'Good day'; }
    var split_afternoon = 12
    var split_evening = 17
    var currentHour = parseFloat(m.format("HH"));
    if(currentHour >= split_afternoon && currentHour <= split_evening) {
      return 'Good Afternoon';
    } else if(currentHour >= split_evening) {
      return 'Good Evening';
    } else {
      return 'Good Morning';
    }
  }

}
