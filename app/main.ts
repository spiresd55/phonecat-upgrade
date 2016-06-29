import { UpgradeAdapter } from '@angular/upgrade';
import { HTTP_PROVIDERS } from '@angular/http';
import { Phone } from './core/phone/phone.service';
import { PhoneListComponent } from './phone-list/phone-list.component';

let upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(Phone);

angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

angular.module('phoneList')
    .directive('phoneList', <angular.IDirectiveFactory> upgradeAdapter.downgradeNg2Component(PhoneListComponent));

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);


