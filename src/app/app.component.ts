import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonService } from './services/common.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title: string|null = null;

    constructor(
        private commonService: CommonService
    ) {
    }

    ngOnInit(): void {
        setTimeout(() => {
            this.commonService.currentPageInfo.subscribe({
                next: (pageInfo) => {
                    this.title = pageInfo.title;
                }
            });
        }, 0)
    }
}
