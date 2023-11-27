import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    menuTypes: { [key: string]: any } = {
        forms: {
            items: [
                {
                    key: 'forms',
                    url: '/forms',
                    label: 'Forms'
                },
                {
                    key: 'forms-predefined',
                    url: '/forms/predefined',
                    label: 'Predefined Forms'
                },
                {
                    key: 'forms-custom',
                    url: '/forms/custom',
                    label: 'Custom Forms'
                }
            ]
        },
        other: {}
    };

    menuItems: Array<{ key: string, url: string, label: string }> = [];

    showMenu = false;

    menuActiveItemKey = '';

    constructor(private commonService: CommonService) {
    }

    ngOnInit() {
        console.log('HeaderComponent ngOnInit');

        this.commonService.navbarData.subscribe({
            next: (navbar) => {
                this.showMenu = navbar.show;

                if (this.menuTypes[navbar.menuType]) {
                    this.menuItems = this.menuTypes[navbar.menuType].items;
                }
            }
        });

        this.commonService.currentPageInfo.subscribe({
            next: (currentPage) => {
                this.menuActiveItemKey = currentPage.menuItemKey;
            }
        });
    }
}
