import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaService } from 'src/app/services/persona.service';
import { PersonaConsultaComponent } from './persona-consulta.component';

describe('PersonaConsultaComponent', () => {
  let component: PersonaConsultaComponent;
  let fixture: ComponentFixture<PersonaConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaConsultaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
