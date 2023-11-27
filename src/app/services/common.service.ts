import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {

    public currentPageInfo = new BehaviorSubject<{ title: string, menuItemKey: string }>({ title: '', menuItemKey: '' });

    public navbarData = new BehaviorSubject<{ show: boolean, menuType: string }>({
        show: false,
        menuType: '',
    });

    constructor() {
    }

    setCurrentPageInfo(title: string, menuItemKey: string) {
        setTimeout(() => {
            this.currentPageInfo.next({ title, menuItemKey });
        }, 0);
    }
}
