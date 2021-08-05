import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuHeaderComponent } from './meu-header.component';

describe('MeuHeaderComponent', () => {
  let component: MeuHeaderComponent;
  let fixture: ComponentFixture<MeuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
