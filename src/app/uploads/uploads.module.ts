import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadsRoutingModule } from './uploads-routing.module';
import { UploadsComponent } from '../reusable-components/uploads/uploads.component';
import { UploadsExampleComponent } from './uploads-example/uploads-example.component';
import { ReusableComponentsModule } from "../reusable-components/reusable-components.module";


@NgModule({
    declarations: [
        UploadsComponent,
        UploadsExampleComponent
    ],
    imports: [
        CommonModule,
        UploadsRoutingModule,
        ReusableComponentsModule
    ]
})
export class UploadsModule { }
