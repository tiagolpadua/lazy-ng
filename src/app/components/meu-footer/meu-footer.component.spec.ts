import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuFooterComponent } from './meu-footer.component';

describe('MeuFooterComponent', () => {
  let component: MeuFooterComponent;
  let fixture: ComponentFixture<MeuFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
