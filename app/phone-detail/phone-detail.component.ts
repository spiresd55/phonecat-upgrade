import {Component, Inject} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {Phone, PhoneData} from '../core/phone/phone.service';
import { CheckMarkPipe } from '../core/checkmark/checkmark.pipe';

@Component({
  selector: 'phone-detail',
  templateUrl: 'phone-detail/phone-detail.template.html',
  pipes: [ CheckMarkPipe]
})

export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(routeParams: RouteParams, phone: Phone) {
    let phoneId = routeParams.get('phoneId');
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    })
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

