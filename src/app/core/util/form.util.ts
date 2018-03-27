/**
 *  用法参考 /src/app/admin/warning-levels.component.ts
 *  array参数参考dataKeys
* */
import { FormGroup, Validators } from '@angular/forms';

export class FormUtil {

  static setControl(array: Object[], isEdit: boolean = false): Object {
    let data = {};
    if (isEdit) data['id'] = ['', Validators.required];
    array.forEach(item => {
      data[item['key']] = item['isRequired'] ? ['', Validators.required] : '';
    });
    return data;
  }

  static populateForm(array: Object[], obj: Object): Object {
    let data = {};
    data['id'] = obj['id'];
      array.forEach(item => {
      data[item['key']] = obj[item['key']];
    });
    return data;
  }

  static getFormValue(array: Object[], form: FormGroup): Object {
    let data = {};
    array.forEach(item => {
      data[item['key']] = form.get(item['key']).value;
    });
    return data;
  }
}