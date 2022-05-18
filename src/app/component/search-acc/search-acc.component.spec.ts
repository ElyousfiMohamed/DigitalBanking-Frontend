import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAccComponent } from './search-acc.component';

describe('SearchAccComponent', () => {
  let component: SearchAccComponent;
  let fixture: ComponentFixture<SearchAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
