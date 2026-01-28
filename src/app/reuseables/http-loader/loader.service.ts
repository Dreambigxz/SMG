import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  public _loading = new BehaviorSubject<boolean>(false);
  public loading$ = this._loading.asObservable();

  private _loadingButton = new BehaviorSubject<HTMLElement | null>(null);
  public loadingButton$ = this._loadingButton.asObservable();

  private activeButton: HTMLElement | null = null;

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }

  setLoadingButton(button: HTMLElement | null) {
    // 🔁 remove previous button loading state
    if (this.activeButton) {
      this.activeButton.classList.remove('loading');
      this.activeButton.removeAttribute('disabled');
    }

    // ➕ apply to new button
    if (button && button.tagName === 'BUTTON') {
      button.classList.add('loading');
      button.setAttribute('disabled', 'true');
      this.activeButton = button;
    } else {
      this.activeButton = null;
    }

    this._loadingButton.next(button);
  }

  getLoadingButton() {
    return this.loadingButton$;
  }
}
