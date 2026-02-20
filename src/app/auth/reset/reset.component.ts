import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpinnerComponent } from '../../reuseables/http-loader/spinner.component';
import { AuthService } from '../../reuseables/auth/auth.service';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { QuickNavService } from "../../reuseables/services/quick-nav.service";

@Component({
  selector: 'app-reset',
  imports: [
    CommonModule, SpinnerComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css', '../auth.component.css']
})
export class ResetComponent {

  authService = inject(AuthService)
  quickNav = inject(QuickNavService);


}
