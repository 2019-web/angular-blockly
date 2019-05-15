import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { BlocklyService } from './blockly.service';

@Component({
  selector: 'app-root',
  template: `
    <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
    <xml id="toolbox" #toolbox style="display: none">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="controls_repeat_ext"></block>
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
            <block type="text"></block>
            <block type="text_print"></block>
    </xml>
  `
})
export class AppComponent implements AfterViewInit {
  workspace: any;
  @ViewChild('toolbox') toolbox: ElementRef;
  constructor(private blocklyService: BlocklyService) {

  }
  ngAfterViewInit(): void {
    this.workspace = this.blocklyService.blockly.inject('blocklyDiv',
    {toolbox: this.toolbox.nativeElement });
  }
}