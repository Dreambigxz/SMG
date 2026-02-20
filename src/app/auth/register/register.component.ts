import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from '../../reuseables/http-loader/spinner.component';
import { AuthService } from '../../reuseables/auth/auth.service';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { QuickNavService } from "../../reuseables/services/quick-nav.service";

@Component({
  selector: 'app-register',
  imports: [
    CommonModule, SpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../auth.component.css']
})
export class RegisterComponent {

    authService = inject(AuthService)
    quickNav = inject(QuickNavService);


    async ngOnInit()   {
      this.authService.setRefCode()
    }
}
