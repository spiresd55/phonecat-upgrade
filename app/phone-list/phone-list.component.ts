import {Phone, PhoneData} from '../core/phone/phone.service';

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  //Injects the Phone provider service
  static $inject = ['phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
  });
