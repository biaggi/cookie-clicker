import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { appReducers } from './store/store';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ReactiveFormsModule,
        StoreModule.forRoot(appReducers)
        ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should be marked as error if invalid'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    app.fg.patchValue({name: 'test'});
    fixture.detectChanges();
    app.fg.patchValue({name: ''});
    fixture.detectChanges();
    const input = fixture.debugElement.nativeElement.querySelector('.is-invalid');
    expect(input).toBeDefined();
  });

});
