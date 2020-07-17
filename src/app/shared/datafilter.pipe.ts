import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter',
  pure:false
})
export class DatafilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!args)
     return value;
    return value.filter(
      item => item.name.toLowerCase().indexOf(args.toLowerCase()) > -1
   );
  }
}
