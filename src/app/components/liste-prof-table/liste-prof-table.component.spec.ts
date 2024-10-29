import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfTableComponent } from './liste-prof-table.component';

describe('ListeProfTableComponent', () => {
  let component: ListeProfTableComponent;
  let fixture: ComponentFixture<ListeProfTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeProfTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeProfTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
