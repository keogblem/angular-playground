import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
    imports: [CommonModule, RouterLink],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

    constructor(private commonService: CommonService) {
    }

    ngOnInit(): void {
        this.commonService.setCurrentPageInfo('Using Form Builders', 'forms');

        this.commonService.navbarData.next({show: true, menuType: 'forms' });
    }
}
