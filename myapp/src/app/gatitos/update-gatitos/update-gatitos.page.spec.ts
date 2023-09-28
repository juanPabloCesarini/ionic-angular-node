import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateGatitosPage } from './update-gatitos.page';

describe('UpdateGatitosPage', () => {
  let component: UpdateGatitosPage;
  let fixture: ComponentFixture<UpdateGatitosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateGatitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
