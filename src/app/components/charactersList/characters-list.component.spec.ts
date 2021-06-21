import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Observable, observable } from 'rxjs';

import { CharactersListComponent } from './characters-list.component';

describe('CharactersListComponent', () => {
  let component: CharactersListComponent;
  let fixture: ComponentFixture<CharactersListComponent>;

  let characterExample = {
    id: 1,
    name: "Agent X (Nijo)",
    description: "description",
    avatarSrc: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg",
    imgSrc: "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_xlarge.jpg",
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}),],
      declarations: [ CharactersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe( 'properties', ()=>{
    beforeEach(()=>{
      //component.charactersList$ =[characterExample, characterExample];
      fixture.detectChanges();
    })
    
    it('should be characterList', ()=>{
      fixture.detectChanges();
      expect(component.charactersList$).toBeTruthy();
    })

    it('should render all items of characterList',()=>{
      fixture.detectChanges();
      let characterListContainer: HTMLElement  = fixture.debugElement.nativeElement.querySelector('.character-card-container');
      expect(characterListContainer.children.length).toEqual(2);
    })

    it('should render style from item.avatarSrc',()=>{
      fixture.detectChanges();
      let avatar: HTMLElement  = fixture.debugElement.nativeElement.querySelector('.avatar')
      expect(avatar.style.backgroundImage).toEqual('url("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg")');
    })
    
    it('should render item.name',()=>{
      fixture.detectChanges();
      let cardTitle:HTMLElement =  fixture.debugElement.nativeElement.querySelector("mat-card-title");
      expect(cardTitle.textContent).toEqual("Agent X (Nijo)");
    })

    it('should render item.description if it exists',()=>{
      fixture.detectChanges();
      let description :HTMLElement = fixture.nativeElement.querySelector("p");
      expect(description.textContent).toEqual("description");
    })

  })
});
