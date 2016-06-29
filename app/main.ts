import { UpgradeAdapter } from '@angular/upgrade';
import { HTTP_PROVIDERS } from '@angular/http';
import { Phone } from './core/phone/phone.service';

let upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.addProvider(HTTP_PROVIDERS);
upgradeAdapter.addProvider(Phone);

angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);


