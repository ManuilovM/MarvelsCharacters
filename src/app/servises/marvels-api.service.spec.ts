import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

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
    xit("test real reqest",()=>{
      service.getMarvelCharacters(0,1).subscribe((data:any)=>{
        console.log(data.data.results[0]);
      })
      expect(true).toBeTruthy();
    })
  })
});
