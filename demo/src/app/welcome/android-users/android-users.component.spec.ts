import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidUsersComponent } from './android-users.component';

describe('AndroidUsersComponent', () => {
  let component: AndroidUsersComponent;
  let fixture: ComponentFixture<AndroidUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidUsersComponent]
    });
    fixture = TestBed.createComponent(AndroidUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
