import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MarvelCharacterFromApi } from '../intefaces/marvel-character-from-api';

import { MarvelsApiService } from './marvels-api.service';

describe('MarvelsApiService', () => {
  let service: MarvelsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MarvelsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe("getMarvelCharacters",()=>{
    it("test real reqest",()=>{
      service.getMarvelCharacters(0,1).subscribe((data:any)=>{
        let primaryArray: Array<MarvelCharacterFromApi> =data.data.results;
        console.log(primaryArray[0]);
      })
      expect(true).toBeTruthy();
    })
  })
});
