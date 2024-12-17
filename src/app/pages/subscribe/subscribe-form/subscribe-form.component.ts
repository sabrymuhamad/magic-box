import { DatePipe, NgClass } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule, IonModal } from '@ionic/angular';
import { EMAIL_PATTERN } from 'src/app/helpers/enums/pattern.enum';
import { GENDER, GRADE } from 'src/app/helpers/enums/shared.enum';
import { Subscribe } from 'src/app/helpers/models/subscribe.model';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule, NgClass],
  providers: [DatePipe]
})
export class SubscribeFormComponent {
  @ViewChild('dateModal') dateModal!: IonModal;
  private datePipe = inject(DatePipe);
  subscribeForm = new Subscribe();
  emailRegex = EMAIL_PATTERN;
  topics = [
    { id: 1, selected: false, name: 'Arabic' },
    { id: 2, selected: false, name: 'Islamic' },
    { id: 3, selected: false, name: 'English' },
    { id: 4, selected: false, name: 'History' },
    { id: 5, selected: false, name: 'Sports' }
  ]

  grades: string[] = Object.values(GRADE);
  genders: string[] = Object.values(GENDER);
  isValidTopics = true;
  openDateModal() {
    this.dateModal.present();
  }

  onDateChange(event: any) {
    this.subscribeForm.childDOB = this.datePipe.transform(event.detail.value, 'dd-M-yyyy')!;
  }

  confirmDate() {
    this.dateModal.dismiss();
  }

  closeDateModal() {
    this.dateModal.dismiss();
  }

  submit(form: NgForm) {
    form.form.markAllAsTouched();
    this.isValidTopics = !!this.isTopicsSelected();
    if (form.form.valid && this.isTopicsSelected()) {

    }
  }

  isTopicsSelected() {
    return this.topics.filter(t => t.selected).length;
  }

}
