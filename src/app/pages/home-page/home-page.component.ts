import { afterEveryRender, afterNextRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { AboutPageComponent } from "../about-page/about-page.component";
const log =(...messages:string[])=>
{
  console.log(`${messages[0]}%c${messages.slice(1).join(',')}`,'color: #bada55');
};
@Component({
  selector: 'app-home-page',
  imports: [TitleComponent, AboutPageComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit,OnChanges {
  traditionalProperty='juan';
  signalProperty=signal('juan')
  constructor(){
    log('Constructor llamado')

    /* setTimeout(()=>{
      this.signalProperty=signal('Juan Carlos')
    },200) */
  }
  changeTradicional(){
    this.traditionalProperty='juan uriel'
  }
  changeSignal(){
    this.signalProperty.set('Juan Uriel')
  }
  basicEffect=effect((onCleanup)=>{
    log('effect',"Disparar efectos secundarios")
    onCleanup(()=>{
      log('onCleanup',"esto se ejecuta cuando el efecto se va a destruir")
    })
  })
  ngOnChanges(){
    log(" ngOnChanges"," Runs every time the component's inputs have changed.")
  }
  ngDoCheck(){
    log(" ngDoCheck"," Runs every time this component is checked for changes.")
  }
  ngAfterContentInit(){
    log(" ngAfterContentInit"," Runs once after the component's content has been initialized.")
  }
  ngAfterContentChecked(){
    log(" ngAfterContentChecked"," Runs every time this component content has been checked for changes.")
  }
  ngAfterViewInit(){
    log(" ngAfterViewInit"," Runs once after the component's view has been initialized.")
  }
  ngAfterViewChecked() {
    log(" ngAfterViewChecked"," Runs every time the component's view has been checked for changes.")
  }
  ngOnInit(){
    log(" ngOnInit"," Runs once after Angular has initialized all the component's inputs.")
  }
  ngOnDestroy(){
    log('ngOnDestroy', "	Runs once before the component is destroyed.")
  }
  afterNextRenderEffect=afterNextRender(()=>{
    log('afterNextRender',"Runs once the next time that all components have been rendered to the DOM.")
  })
  afterEveryRenderEffect=afterEveryRender(()=>{
  log("afterEveryRender","	Runs every time all components have been rendered to the DOM.");
  })
}
