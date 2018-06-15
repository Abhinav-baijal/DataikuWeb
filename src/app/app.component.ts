import { Component } from '@angular/core';
import { OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ColumnNamesService } from './services/column-names.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Models
import { ColumnNames } from './model/column-names.models';
import { Visualize } from './model/visualize-response.models';
import { VisualizeResponse } from './model/visualize-response.models';


@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ColumnNamesService]
} )
export class AppComponent implements OnInit {
    
    dropDownValues: string[];
    response: VisualizeResponse;
    columnNameValue: " ";
    length: number;
    disp: Visualize[];
    totalCount: number;
    undisplayedRowsCount: number;
    undisplayedValues: string[];
    constructor(
        private columnNamesService: ColumnNamesService
    ) { }
    title = 'Visualization web application';

    ngOnInit(): void {
        // getting the names of columns
        this.getColumns();
    }
    
    getColumns(): void {
        this.columnNamesService.getColumnNames()
            .subscribe( columns => this.dropDownValues = columns );
    }
    
    getVisualize(): void {

        console.log(this.columnNameValue);
        this.columnNamesService.getVisualize(this.columnNameValue)
            .subscribe( res => {
                this.response = res;
                this.length = this.response.results.length;
                this.disp = res.results;
                this.totalCount = res.totalCount;
                this.undisplayedRowsCount = res.undisplayedRowsCount;
                this.undisplayedValues = res.undisplayedValues;
                console.log(this.response.totalCount);
            });
    }
    
    selectName(): void {
        this.getVisualize();
        console.log(this.columnNameValue);
        
        
    }

}
   
