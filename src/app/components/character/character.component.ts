import { Component, OnInit } from '@angular/core';

const character =   {
  "id": 1011031,
  "name": "Agent X (Nijo)",
  "description": "Originally a partner of the mind-altering assassin Black Swan, Nijo spied on Deadpool as part of the Swan's plan to exact revenge for Deadpool falsely taking credit for the Swan's assassination of the Four Winds crime family, which included Nijo's brother.",
  "avatarSrc": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/standard_xlarge.jpg",
  "imgSrc": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/landscape_xlarge.jpg",
  "comics": {
    "available": 18,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17702",
        "name": "Agent X (2002) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17709",
        "name": "Agent X (2002) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17710",
        "name": "Agent X (2002) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17711",
        "name": "Agent X (2002) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17712",
        "name": "Agent X (2002) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17713",
        "name": "Agent X (2002) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17714",
        "name": "Agent X (2002) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17715",
        "name": "Agent X (2002) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17716",
        "name": "Agent X (2002) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17703",
        "name": "Agent X (2002) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17704",
        "name": "Agent X (2002) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17705",
        "name": "Agent X (2002) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17706",
        "name": "Agent X (2002) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17707",
        "name": "Agent X (2002) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/394",
        "name": "Agent X (2002) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1649",
        "name": "Cable & Deadpool (2004) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21845",
        "name": "Cable & Deadpool (2004) #46 (Zombie Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5761",
        "name": "Cable & Deadpool Vol. 2: The Burnt Offering (Trade Paperback)"
      }
    ],
    "returned": 18
  },
  "series": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/459",
        "name": "Agent X (2002 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/693",
        "name": "Cable & Deadpool (2004 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1338",
        "name": "Cable & Deadpool Vol. 2: The Burnt Offering (2007)"
      }
    ],
    "returned": 3
  },
  "stories": {
    "available": 23,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1135",
        "name": "AGENT X (2002) #15",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2484",
        "name": "CABLE & DEADPOOL (2004) #12",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37514",
        "name": "AGENT X (2002) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37515",
        "name": "Dead Man's Switch Part One",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37516",
        "name": "AGENT X (2002) #10",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37518",
        "name": "AGENT X (2002) #11",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37521",
        "name": "AGENT X (2002) #13",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37523",
        "name": "AGENT X (2002) #14",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37525",
        "name": "AGENT X (2002) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37526",
        "name": "Dead Man's Switch Part Two",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37527",
        "name": "AGENT X (2002) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37528",
        "name": "Dead Man's Switch Part Three",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37529",
        "name": "AGENT X (2002) #4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37530",
        "name": "Dead Man's Switch Part Four",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37531",
        "name": "AGENT X (2002) #5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37532",
        "name": "Dead Man's Switch Part Five",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37533",
        "name": "AGENT X (2002) #6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37534",
        "name": "Dead Man's Switch Part Six",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37535",
        "name": "AGENT X (2002) #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/67703",
        "name": "AGENT X (2002) #12",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011031/events",
    "items": [],
    "returned": 0
  }
}

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  character = character;

  constructor() { }

  ngOnInit(): void {
  }

}
