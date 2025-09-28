import { afterEveryRender, afterNextRender, Component, effect } from '@angular/core';
const log =(...messages:string[])=>
{
  console.log(`${messages[0]}%c${messages.slice(1).join(',')}`,'color: #bada55');
};
@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent {

}
