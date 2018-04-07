import {OnInit} from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';

@Component({
    selector: 'year-picker',

    template: `
    <div>

    <div class="col-xs-2">      
    <select class="form-control"  required>
            <option  *ngFor="let y of years"  [selected]="yy === y ">{{y}}</option>    
    </select>
    </div>

    </div>`
})

export class YearPickerComponent implements OnInit {


private years: number[] =[];
private yy : number;

    ngOnInit() { 
    this.getYear();

    }  

     getYear(){
        var today = new Date();
        this.yy = today.getFullYear();        
        for(var i = (this.yy-100); i <= this.yy; i++){
        this.years.push(i);}
    }


}