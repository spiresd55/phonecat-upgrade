import {Component} from '@angular/core';
import {Phone, PhoneData} from '../core/phone/phone.service';
import { RouterLink } from '@angular/router-deprecated';

@Component({
  selector: 'phone-list',
  templateUrl: 'phone-list/phone-list.template.html',
  directives: [ RouterLink ]
})

export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if(phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        let search = this.query.toLowerCase()
        return name.indexOf(search) >= 0 || snippet.indexOf(search) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
          .slice(0) // Make a copy
          .sort((a, b) => {
            if (a[this.orderProp] < b[this.orderProp]) {
              return -1;
            } else if ([b[this.orderProp] < a[this.orderProp]]) {
              return 1;
            } else {
              return 0;
            }
          });
    }
    return phones;
  }
}

