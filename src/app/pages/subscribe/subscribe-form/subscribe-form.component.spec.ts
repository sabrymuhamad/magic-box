import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, IonModal } from '@ionic/angular';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { SubscribeFormComponent } from './subscribe-form.component';
import { By } from '@angular/platform-browser';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [DatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open the date modal when openDateModal is called', () => {
    spyOn(component.dateModal, 'present');
    component.openDateModal();
    expect(component.dateModal.present).toHaveBeenCalled();
  });

  it('should close the date modal when confirmDate is called', () => {
    spyOn(component.dateModal, 'dismiss');
    component.confirmDate();
    expect(component.dateModal.dismiss).toHaveBeenCalled();
  });

  it('should close the date modal when closeDateModal is called', () => {
    spyOn(component.dateModal, 'dismiss');
    component.closeDateModal();
    expect(component.dateModal.dismiss).toHaveBeenCalled();
  });

  it('should format and set childDOB on date change', () => {
    const mockEvent = { detail: { value: '2024-12-17' } };
    const datePipe = TestBed.inject(DatePipe);
    const formattedDate = datePipe.transform('2024-12-17', 'dd-M-yyyy');

    component.onDateChange(mockEvent);
    expect(component.subscribeForm.childDOB).toEqual(formattedDate!);
  });

  it('should mark all fields as touched and validate topics on submit', () => {
    const mockForm = {
      form: {
        valid: false,
        markAllAsTouched: jasmine.createSpy('markAllAsTouched'),
      },
    } as unknown as NgForm;

    component.subForm = mockForm;
    spyOn(component, 'isTopicsSelected').and.returnValue(0);

    component.submit();

    expect(mockForm.form.markAllAsTouched).toHaveBeenCalled();
    expect(component.isValidTopics).toBeFalse();
  });

  it('should return true if at least one topic is selected', () => {
    component.topics[0].selected = true;
    const selectedTopics = component.isTopicsSelected();
    expect(selectedTopics).toBe(1);
  });

  it('should return false if no topics are selected', () => {
    component.topics.forEach(topic => (topic.selected = false));
    const selectedTopics = component.isTopicsSelected();
    expect(selectedTopics).toBe(0);
  });
});
