/*
 * This file is part of ng2-json-editor.
 * Copyright (C) 2016 CERN.
 *
 * ng2-json-editor is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * ng2-json-editor is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with ng2-json-editor; if not, write to the Free Software Foundation, Inc.,
 * 59 Temple Place, Suite 330, Boston, MA 02111-1307, USA.
 * In applying this license, CERN does not
 * waive the privileges and immunities granted to it by virtue of its status
 * as an Intergovernmental Organization or submit itself to any jurisdiction.
*/

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AbstractListFieldComponent } from '../abstract-list-field';

import { AppGlobalsService, EmptyValueService } from '../shared/services';

@Component({
  selector: 'primitive-list-field',
  styleUrls: [
    './primitive-list-field.component.scss'
  ],
  templateUrl: './primitive-list-field.component.html'
})
// FIXME: this doesn't have all stuff of AbstractListFieldComponent. Maybe, it shouldn't extend it.
export class PrimitiveListFieldComponent extends AbstractListFieldComponent {

  @Input() values: Array<any>;
  @Input() schema: Object;
  @Input() path: string;

  @Output() onValuesChange: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  constructor(public emptyValueService: EmptyValueService,
    public appGlobalsService: AppGlobalsService) {
    super();
  }

  /**
   * Called when any element of is changed of the values is changed
   * @override
   * 
   * It casts new value to appropriate type.
   * 
   * @param {any} event - new value
   * @param {number} index - index of changed element in array
   * 
   */
  onValueChange(event: any, index: number) {
    this.values[index] = event;
    this.onValuesChange.emit(this.values);
  }

  /**
   * Returns path of an element at index.
   * @override
   */
  getValuePath(index: number): string {
    return `${this.path}.${index}`;
  }
}
