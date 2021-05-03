import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MessageService } from './message.service';
import { HeroService } from './hero.service';

describe('Service Tests', () => {
  let service: HeroService;
  let httpMock: HttpTestingController;
  let mockMessageService;

  beforeEach(() => {

    mockMessageService = jasmine.createSpyObj(['add']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroService, 
        { provide: MessageService, useValue: mockMessageService }],
    });
    //service = TestBed.get(HeroService);
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(HeroService);
  });

  //afterEach(() => {
  //  httpMock.verify();
  //});

  describe('Service methods', () => {
    it('should return a hero', () => {
      let expectedResult;
      const hero = {
        id: 1,
        name: "James",
        strength: 45
      };

      service.getHero(1).subscribe(hr => {
        expectedResult = hr;
      });

      const req = httpMock.expectOne('api/heroes/1');
      req.flush(hero);
      httpMock.verify();
      expect(expectedResult).toEqual(hero);
    });
  });

});
