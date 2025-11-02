import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetasForm } from './recetas-form';

describe('RecetasForm', () => {
  let component: RecetasForm;
  let fixture: ComponentFixture<RecetasForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetasForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetasForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
