import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles =  [
    {"source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Vas Panagiotopoulos",
    "title": "Soccer Fans, You're Being Watched",
    "description": "Stadiums around the world, including at the 2022 World Cup in Qatar, are subjecting spectators to invasive biometric surveillance tech.",
    "url": "https://www.wired.com/story/soccer-world-cup-biometric-surveillance/",
    "urlToImage": "https://media.wired.com/photos/63630bb699fe777052767ac3/191:100/w_1280,c_limit/Soccer-Fans,-You%E2%80%99re-Being-Watched-Security-GettyImages-1235954583.png",
    "publishedAt": "2022-11-03T11:00:00Z",
    "content": "Public safety is a longstanding justification for the spread of biometric surveillance systems, while Covid-19 introduced a health dimension through body-temperature monitoring, Hutchins says. Market… [+3800 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Boone Ashworth",
    "title": "Alexa Might Not Get Much Smarter Than It Is Right Now",
    "description": "Plus: Apple pays for more emergency satellite tech, LG is working on a stretchy screen, and we answer all your burning questions about Mastodon.",
    "url": "https://www.wired.com/story/amazon-alexa-reportedly-losing-money/",
    "urlToImage": "https://media.wired.com/photos/636eea48454b677de6f65e1e/191:100/w_1280,c_limit/Alexa-Might-Not-Get-Much-Smarter-Than-It-Is-Right-Now-Alamy-2DEF5DX.jpg",
    "publishedAt": "2022-11-12T14:00:00Z",
    "content": "\"Hey Alexa, can you make some money?\"\r\nAs reported by The Wall Street Journal, Amazon is aiming to cut costs by slimming down some of its less profitable departments. The big one is Alexa, Amazons vo… [+4042 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Khari Johnson",
    "title": "Europe Prepares to Rewrite the Rules of the Internet",
    "description": "The Digital Markets Act will force big tech platforms to break open their walled gardens in 2023, says the EU's new ambassador to Silicon Valley.",
    "url": "https://www.wired.com/story/europe-dma-prepares-to-rewrite-the-rules-of-the-internet/",
    "urlToImage": "https://media.wired.com/photos/635b19823d7842cc349a2212/191:100/w_1280,c_limit/business-eu-digital-markets-act.jpg",
    "publishedAt": "2022-10-28T11:00:00Z",
    "content": "Next week, a law takes effect that will change the internet foreverand make it much more difficult to be a tech giant. On November 1, the European Unions Digital Markets Act comes into force, startin… [+2900 chars]"
    },
    {
    "source": {
    "id": "wired",
    "name": "Wired"
    },
    "author": "Andy Greenberg",
    "title": "The Hunt for the Dark Web’s Biggest Kingpin, Part 1: The Shadow",
    "description": "AlphaBay was the largest online drug and crime bazaar in history, run by a technological mastermind who seemed untouchable—until his tech was turned against him.",
    "url": "https://www.wired.com/story/alphabay-series-part-1-the-shadow/",
    "urlToImage": "https://media.wired.com/photos/6345ba77df241d47294a020b/191:100/w_1280,c_limit/WI110122_EX_Tracers_AlphaBay1_01.jpg",
    "publishedAt": "2022-10-25T10:00:00Z",
    "content": "Shortly before AlphaBay took over the dark web's top spot, Alpha02 had changed his username on the site to merely admin and announced that he would no longer accept any private messages sent to him b… [+3169 chars]"
    },
    {
    "source": {
    "id": "engadget",
    "name": "Engadget"
    },
    "author": "Jon Fingas",
    "title": "FTC says ed tech company Chegg exposed data of 40 million users",
    "description": "You may trust Chegg with your textbooks or tutoring, but regulators aren't quite so confident. The Federal Trade Commission has filed a complaint accusing education tech provider Chegg of \"careless\" security practices that compromised personal data since 2017…",
    "url": "https://www.engadget.com/ftc-chegg-order-student-data-exposed-162414289.html",
    "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-09/7fb955c0-ec9b-11ea-bb29-a603c6a7acc8",
    "publishedAt": "2022-10-31T16:24:14Z",
    "content": "You may trust Chegg with your textbooks or tutoring, but regulators aren't quite so confident. The Federal Trade Commission has filed a complaint accusing education tech provider Chegg of \"careless\" … [+2939 chars]"
    },
    {
    "source": {
    "id": "the-verge",
    "name": "The Verge"
    },
    "author": "Mia Sato",
    "title": "TikTok livestreaming is shaping up to be the short-form video giant’s next push",
    "description": "TikTok is working on bringing livestream shopping to the US by partnering with agencies and tech companies that coach brands on how to go live. Previous reports indicated that TikTok was doing the same with entertainers.",
    "url": "https://www.theverge.com/2022/10/21/23416199/tiktok-livestreams-shopping-expansion-influencer-agencies-tipping",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/H3HKAfeuFnLG1fOkQLT9RyCEMlA=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951406/STK051_VRG_Illo_N_Barclay_6_tiktok.jpg",
    "publishedAt": "2022-10-21T16:49:05Z",
    "content": "TikTok livestreaming is shaping up to be the short-form video giants next push\r\nTikTok livestreaming is shaping up to be the short-form video giants next push\r\n / TikToks dominance in short-form vide… [+3048 chars]"
    }
];


  constructor(){
    super();
    console.log("constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsCrumb - Top Headlines</h2>

        <div className='row'>
          <div className="col-md-4">
            <NewsItem title="newsTitle" description="mydesc" imageUrl="https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/1522d4c2-39f3-4c84-91f7-df1b9c542534/05814a7a-970f-4d2c-9c7c-b31ab02a694f/1280x720/match/image.jpg" newsUrl="To do"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="newsTitle" description="mydesc"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="newsTitle" description="mydesc"/>
          </div>
        
        </div>
        
      </div>
    )
  }
}

export default News
