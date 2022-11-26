import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userList: any[], filterstring: string, propName: any): any[] {
    const result: any = []
    if (!userList || filterstring == '' || propName == '') {
      return userList
    }
    userList.forEach(user => {
      if (user[propName].trim().toLowerCase().includes(filterstring.toLowerCase())) {
        result.push(user)
      }
    })
    return result

  }

}
