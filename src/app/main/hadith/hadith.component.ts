import {Component, OnInit} from '@angular/core';
import {Had} from './Had';

import {ApiService} from '../../api.service';


@Component({
    selector: 'app-hadith',
    templateUrl: './hadith.component.html',
    styleUrls: ['./hadith.component.scss']
})
export class HadithComponent implements OnInit {

    had = {};

    constructor(private apiService: ApiService) {
    }

    getAllHad() {
        this.apiService.getHad()
            .subscribe((had: Had) => {
                console.log(had);
                this.had = had.value;
                console.log(this.had);
            });
    }

    save(item) {
        console.log(item);
    }

    ngOnInit() {
        this.getAllHad();
    }

}
