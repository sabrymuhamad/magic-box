import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { IonicModule, IonModal } from '@ionic/angular';
import { SubscribeFormComponent } from './subscribe-form.component';
import { Subscribe } from 'src/app/helpers/models/subscribe.model';
import { GRADE, GENDER } from 'src/app/helpers/enums/shared.enum';

describe('SubscribeFormComponent', () => {
  let component: SubscribeFormComponent;
  let fixture: ComponentFixture<SubscribeFormComponent>;
  let datePipeMock: jest.Mocked<DatePipe>;

  beforeEach(async () => {
    // Mock DatePipe
    datePipeMock = { transform: jest.fn() } as unknown as jest.Mocked<DatePipe>;

    await TestBed.configureTestingModule({
      imports: [IonicModule, FormsModule],
      declarations: [SubscribeFormComponent],
      providers: [{ provide: DatePipe, useValue: datePipeMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribeFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.subscribeForm).toBeInstanceOf(Subscribe);
    expect(component.grades).toEqual(Object.values(GRADE));
    expect(component.genders).toEqual(Object.values(GENDER));
    expect(component.isValidTopics).toBe(true);
    expect(component.topics.length).toBe(5);
  });

  it('should open date modal', () => {
    const modalSpy = jest.spyOn(component.dateModal, 'present');
    component.openDateModal();
    expect(modalSpy).toHaveBeenCalled();
  });

  it('should close date modal on confirmDate', () => {
    const modalSpy = jest.spyOn(component.dateModal, 'dismiss');
    component.confirmDate();
    expect(modalSpy).toHaveBeenCalled();
  });

  it('should close date modal on closeDateModal', () => {
    const modalSpy = jest.spyOn(component.dateModal, 'dismiss');
    component.closeDateModal();
    expect(modalSpy).toHaveBeenCalled();
  });

  it('should set childDOB on date change', () => {
    const mockEvent = { detail: { value: '2024-06-01' } };
    datePipeMock.transform.mockReturnValue('01-06-2024');

    component.onDateChange(mockEvent);

    expect(datePipeMock.transform).toHaveBeenCalledWith('2024-06-01', 'dd-M-yyyy');
    expect(component.subscribeForm.childDOB).toBe('01-06-2024');
  });

  it('should validate topic selection', () => {
    component.topics[0].selected = true;
    expect(component.isTopicsSelected()).toBe(1);

    component.topics[1].selected = true;
    expect(component.isTopicsSelected()).toBe(2);
  });

  it('should submit form and validate topics', () => {
    component.subForm = {
      form: {
        markAllAsTouched: jest.fn(),
        valid: true,
      },
    } as unknown as NgForm;

    jest.spyOn(component, 'isTopicsSelected').mockReturnValue(1);

    component.submit();

    expect(component.subForm.form.markAllAsTouched).toHaveBeenCalled();
    expect(component.isValidTopics).toBe(true);
  });

  it('should mark topics invalid if none are selected on submit', () => {
    component.subForm = {
      form: {
        markAllAsTouched: jest.fn(),
        valid: true,
      },
    } as unknown as NgForm;

    jest.spyOn(component, 'isTopicsSelected').mockReturnValue(0);

    component.submit();

    expect(component.isValidTopics).toBe(false);
  });
});
