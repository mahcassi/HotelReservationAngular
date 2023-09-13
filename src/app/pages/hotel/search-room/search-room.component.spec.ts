import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRoomComponent } from './search-room.component';

describe('SearchRoomComponent', () => {
  let component: SearchRoomComponent;
  let fixture: ComponentFixture<SearchRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRoomComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
