import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {
  transform(value: string): string {
    return value.endsWith('ón') ? `${value.replace('ó', 'o')}es` : `${value}s`
  }
}
