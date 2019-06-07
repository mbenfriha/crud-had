import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSearchBarModule } from '@fuse/components';
import {HadithComponent} from './hadith.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatAccordion, MatExpansionPanelTitle} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';


const modules = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatExpansionModule,
];

const routes = [
    {
        path     : 'hadith',
        component: HadithComponent
    }
];

@NgModule({
    declarations: [
        HadithComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        modules,
        FuseSearchBarModule
    ],
    exports     : [
        HadithComponent,
        modules
    ]
})

export class HadithModule
{
}
