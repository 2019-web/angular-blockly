import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BlocklyService } from './blockly.service';
export const t = window['Blockly'];

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
   schemas: [NO_ERRORS_SCHEMA],
   providers: [
     { provide: BlocklyService, useFactory: ()=>{ return new BlocklyService(t);  } }
   ]
})
export class AppModule { }
