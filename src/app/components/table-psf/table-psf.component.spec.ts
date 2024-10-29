import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePSFComponent } from './table-psf.component';

describe('TablePSFComponent', () => {
  let component: TablePSFComponent;
  let fixture: ComponentFixture<TablePSFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePSFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
