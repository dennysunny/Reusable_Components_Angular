import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent  {

  @Input() options :any = ''

  expandedOption: number | null = null;
  selectedOption: { title: string, content: string } | null = null;
  isCollapsed: boolean = true;

  expandOption(optionId: number): void {
    this.expandedOption = optionId;
    this.selectedOption = this.options[optionId];
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

}
