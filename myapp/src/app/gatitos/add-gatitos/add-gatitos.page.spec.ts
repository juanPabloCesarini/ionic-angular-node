import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGatitosPage } from './add-gatitos.page';

describe('AddGatitosPage', () => {
  let component: AddGatitosPage;
  let fixture: ComponentFixture<AddGatitosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddGatitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
