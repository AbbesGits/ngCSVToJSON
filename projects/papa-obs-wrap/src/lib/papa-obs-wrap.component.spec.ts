import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapaObsWrapComponent } from './papa-obs-wrap.component';

describe('PapaObsWrapComponent', () => {
  let component: PapaObsWrapComponent;
  let fixture: ComponentFixture<PapaObsWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapaObsWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapaObsWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
