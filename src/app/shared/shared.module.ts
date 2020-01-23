import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertModalComponent, ConfirmModalComponent, JumbotronComponent, FooterComponent],
  exports: [AlertModalComponent, JumbotronComponent, FooterComponent],
  entryComponents: [AlertModalComponent, ConfirmModalComponent]
})
export class SharedModule { }
