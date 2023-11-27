import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../services/common.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-predefined',
  standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms-predefined.component.html',
  styleUrl: './forms-predefined.component.scss'
})
export class FormsPredefinedComponent implements OnInit{

    // @ts-ignore
    public formGroup : FormGroup;

    public allValid = false;

    constructor(private commonService: CommonService, private builder: FormBuilder) {
    }

    ngOnInit(): void {
        this.commonService.setCurrentPageInfo('Predifined Forms', 'forms-predefined');
        this.commonService.navbarData.next({ show: true, menuType: 'forms' });

        this.formGroup = this.builder.group({
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            name: this.builder.group({
                first: ['', [
                    Validators.required,
                    Validators.minLength(3),
                ]],
                last: ['', [
                    Validators.required,
                    Validators.minLength(3),
                ]]
            })
        })

        this.formGroup.valueChanges.subscribe({
            next: (value) => {
                console.log(value);
                this.allValid = this.formGroup.valid;
                // if (this.formGroup.valid) {
                //     console.log('valid');
                // }
            }
        })
    }

    get email() {
        return this.formGroup.get('email');
    }

    get name() {
        return this.formGroup.get('name');
    }    get firstname() {
        return this.formGroup.get('name.first');
    }    get lastname() {
        return this.formGroup.get('name.last');
    }
}
