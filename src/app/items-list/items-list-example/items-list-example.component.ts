import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-list-example',
  templateUrl: './items-list-example.component.html',
  styleUrls: ['./items-list-example.component.css']
})
export class ItemsListExampleComponent  {

  

  items = [
    {
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/50723/m5-exterior-right-front-three-quarter-2.jpeg?q=80&q=80',
      title: 'BMW M5 Competition',
      description: 'BMW M5 Competition is the top model in the M5 lineup and the price of M5 top model is Rs. 1.74 Crore. BMW M5 Competition is available in Automatic (TC) transmission and offered in 8 colours: Snapper Rocks Blue Metallic, Black Sapphire Metallic, Marina Bay Blue Metallic, Brands Hatch Grey Metallic, Motegi Red Metallic, Bluestone Metallic, Donington Grey Metallic and Alpine White.'
    },
    {
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/44615/lexus-lc-500h-right-front-three-quarter10.jpeg?q=80&q=80',
      title: 'Lexus LC 500h',
      description: 'India with the launch of Lexus LC 500h. The hybrid vehicle is available in a single variant. The vehicle was first showcased at the 2012 Detroit Motor Show. The luxury coupe is available in 68 countries.'
    },
    {
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/139739/land-cruiser-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80',
      title: 'Toyota Land Cruiser',
      description: "The king of all things, SUVs hardly need an introduction. An iconic vehicle, the Land Cruiser in this new generation you see in the video, was unveiled in early 2021 and instantly became an all-out success. It’s finally made it to the Indian shores, and with a rumoured price tag of Rs 2.1 crore, it is expected to be launched here within the next few weeks. Ahead of its official arrival, the car was on display at a Toyota stall at the 2023 Auto Expo and here are all the key details. There’s nothing quite like a Land Cruiser when it comes to presence. The face is dominated by a sizeable three-slat grille, while the full LED headlamps look a bit dwarfed in front of the large LED DRLs that line up with the top slat and the Toyota logo. The hood sits high with a big dip in the middle to give a pronounced muscular hump. "
    },
  ];
}
