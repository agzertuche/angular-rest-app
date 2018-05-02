import { Component, OnInit } from '@angular/core';
import { WidgetService, Widget } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetService: WidgetService) {}

  ngOnInit() {
    this.widgets = this.widgetService.widgets;
    this.reset();
  }

  reset() {
    this.selectedWidget = { id: null, name: '' };
  }

  cancel() {
    this.reset();
  }

  save(widget) {
    console.log('Saved...', widget);
  }

  selected(widget) {
    this.selectedWidget = widget;
  }
}
