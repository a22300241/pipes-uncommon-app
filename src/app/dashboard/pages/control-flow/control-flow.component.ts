import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";
type Grade='a'|'b'|'f';
@Component({
  selector: 'app-control-flow',
  imports: [TitleComponent, TitleComponent],
  templateUrl: './control-flow.component.html'
})
export default class ControlFlowComponent {
  public showContent=signal(false);
  public grade=signal<Grade>('a');
  public frameworks= signal(['Angular','Vue','Svelte','Qwik','React']);
  public frameworks2= signal([]);
  public toggleContent(){
    this.showContent.update(value=>!value);
  }
}
