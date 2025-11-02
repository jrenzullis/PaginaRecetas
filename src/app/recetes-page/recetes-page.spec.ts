import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetesPage } from './recetes-page';

describe('RecetesPage', () => {
  let component: RecetesPage;
  let fixture: ComponentFixture<RecetesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
