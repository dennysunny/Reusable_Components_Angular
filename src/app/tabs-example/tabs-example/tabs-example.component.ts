import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-example',
  templateUrl: './tabs-example.component.html',
  styleUrls: ['./tabs-example.component.css']
})
export class TabsExampleComponent  {

   options = [
    {
      id: 'apple',
      title: 'Apple Inc.',
      content: 'Apple Inc. is one of the world\'s most iconic and influential technology companies. Founded in 1976 by Steve Jobs, Steve Wozniak, and Ronald Wayne, Apple has consistently pushed the boundaries of innovation in the consumer electronics industry. The company is headquartered in Cupertino, California, and is known for its cutting-edge products, including the iPhone, iPad, Macintosh computers, and more.\n\nApple is renowned for its commitment to design excellence and user-friendly interfaces. The company\'s ecosystem, which includes the iOS and macOS operating systems, the App Store, and iCloud, has created a seamless and interconnected experience for users across their devices.\n\nWith a market capitalization that often surpasses the trillion-dollar mark, Apple is not only a technology giant but also a financial powerhouse. Its brand is synonymous with quality, innovation, and luxury, making it one of the most recognized and coveted brands globally.'
    },
    
    {
      id: 'amazon',
      title: 'Amazon.com',
      content: 'Amazon.com, Inc., founded by Jeff Bezos in 1994, is the world\'s largest online retailer and cloud computing provider. Headquartered in Seattle, Washington, Amazon started as an online bookstore but quickly diversified into a wide range of products and services. It has transformed the way people shop, stream content, and access cloud computing resources.\n\nAmazon\'s e-commerce platform is known for its vast selection, competitive prices, and convenient delivery options, such as Amazon Prime. Additionally, Amazon Web Services (AWS) has become a dominant force in cloud computing, providing services to countless businesses and organizations worldwide.\n\nThe company has consistently pushed the boundaries of innovation, introducing technologies like the Amazon Echo and Alexa voice assistant. Amazon\'s commitment to customer-centricity has earned it a reputation for convenience and reliability. Its impact on the retail and tech industries is undeniable, making it a globally recognized brand.'
    },
    {
      id: 'google',
      title: 'Google',
      content: "Google, a subsidiary of Alphabet Inc., is a multinational technology company founded by Larry Page and Sergey Brin in 1998. Known for its mission to organize the world\'s information and make it universally accessible and useful, Google has become a household name and a dominant player in various tech sectors.\n\nThe company\'s core product is its search engine, which handles billions of searches daily. Google has expanded into numerous other areas, including online advertising through Google Ads, cloud computing with Google Cloud, and mobile operating systems with Android.\n\nIn addition to its products, Google is known for its commitment to innovation and research. Projects like Google Maps, Google Drive, and the development of the Android mobile operating system have shaped the digital landscape.\n\nGoogle\'s impact on the internet and technology is immeasurable, and its colorful logo is instantly recognizable. The company's brand is synonymous with information, innovation, and technological advancement."
    },
    {
      id: 'cocacola',
      title: 'The Coca-Cola Company',
      content: "The Coca-Cola Company, often referred to simply as Coca-Cola, is a global beverage giant with a rich history dating back to 1886. Founded by John S. Pemberton, Coca-Cola introduced the world to its signature carbonated soft drink, Coca-Cola, which has become one of the most widely recognized and consumed beverages worldwide.\n\nOver the years, Coca-Cola has expanded its product portfolio to include a wide range of beverages, including Diet Coke, Sprite, Fanta, and more. The iconic Coca-Cola logo, featuring its distinct red and white branding, is a symbol of refreshment and enjoyment.\n\nCoca-Cola is not only a beverage company but also a marketing powerhouse. The brand is known for its memorable advertising campaigns, including the famous 'Share a Coke' campaign. The company has also been involved in various philanthropic efforts and environmental initiatives. Coca-Cola's impact on global pop culture and its enduring appeal make it a top-tier brand."
    },
    {
      id: 'microsoft',
      title: 'Microsoft Corporation',
      content: "Microsoft Corporation, founded by Bill Gates and Paul Allen in 1975, is a multinational technology company headquartered in Redmond, Washington. It is one of the pioneers of the personal computer revolution and has played a pivotal role in shaping the software industry.\n\nMicrosoft is best known for its Windows operating system, which is used by millions of computer users around the world. Additionally, the company has a suite of productivity software, including Microsoft Office, which includes Word, Excel, and PowerPoint.\n\nIn recent years, Microsoft has diversified its offerings into cloud computing with Azure, gaming with Xbox, and business solutions through Microsoft Dynamics. The acquisition of LinkedIn and GitHub has further expanded its influence.\n\nMicrosoft's commitment to innovation, research, and software development has made it a global leader in the technology sector. Its brand is synonymous with reliability, productivity, and technological advancement, and it continues to be a dominant force in the industry."
    }
    
  ];
  
}
