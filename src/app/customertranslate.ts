import {TranslateLoader} from '@ngx-translate/core';

import { HttpClient } from '@angular/common/http';
import { Observable , forkJoin} from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

export class CustomLoader implements TranslateLoader {
  public sPath:string = "";

  constructor(private http: HttpClient) {
    this.sPath = environment.production == true ? "/palace/" : "";
  }
  getTranslation(langCountry: string): Observable<any> {
    // Condition satisfies upon page load. com.json is loaded.
    if (!langCountry.includes('_')) {
      return this.http.get(this.sPath + '/assets/i18n/' + langCountry + '.json');
    }

    const arr = langCountry.split('_');
    return forkJoin(
      this.http.get(this.sPath + '/assets/i18n/' + arr[0] + '.json'),
      this.http.get(this.sPath + '/assets/i18n/' + arr[1] + '/' + langCountry + '.json'))
      .pipe(map(data => {
        const res = {};
        data.forEach((obj) => {
          Object.assign(res, obj);
        });
        return res;
      }));
  }
}