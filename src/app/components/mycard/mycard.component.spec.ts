import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycardComponent } from './mycard.component';

describe('MycardComponent', () => {
  let component: MycardComponent;
  let fixture: ComponentFixture<MycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
