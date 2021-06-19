import { ComponentFixture, TestBed } from '@angular/core/testing';

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
      declarations: [ CharactersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe( 'properties', ()=>{
    beforeEach(()=>{
      component.charactersList =[characterExample, characterExample];
      fixture.detectChanges();
    })
    
    it('should be characterList', ()=>{
      expect(component.charactersList).toBeTruthy();
    })

    it('should render all items of characterList',()=>{
      fixture.detectChanges();
      let characterListContainer: HTMLElement  = fixture.debugElement.nativeElement.querySelector('.characters-list-container');
      fixture.detectChanges();
      expect(characterListContainer.children.length).toEqual(2);
    })

    it('should render style from item.avatarSrc',()=>{
      fixture.detectChanges();
      let avatar: HTMLElement  = fixture.debugElement.nativeElement.querySelector('.avatar')
      fixture.detectChanges();
      expect(avatar.style.backgroundImage).toEqual('url("http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg")');
    })
    
    it('should render item.name',()=>{
      fixture.detectChanges();
      let cardTitle:HTMLElement =  fixture.debugElement.nativeElement.querySelector("mat-card-title");
      fixture.detectChanges();
      expect(cardTitle.textContent).toEqual("Agent X (Nijo)");
    })


    it('should render item.description if it exist',()=>{
      fixture.detectChanges();
      let description :HTMLElement =  fixture.debugElement.nativeElement.querySelector("p");
      fixture.detectChanges();
      expect(description.textContent).toEqual("description ");
    })

    it('shoul render "no description" if item.description==false', ()=>{
      component.charactersList[0].description = "";
      component.charactersList[1].description = "";
      fixture.detectChanges();
      let description :HTMLElement =  fixture.debugElement.nativeElement.querySelector("p");
      fixture.detectChanges();
      expect(description.textContent).toEqual("No description");
    })

  })
});
