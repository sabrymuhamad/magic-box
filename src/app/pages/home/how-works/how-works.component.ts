import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-how-works',
  templateUrl: './how-works.component.html',
  styleUrls: ['./how-works.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class HowWorksComponent {

  steps = [
    {
      id: 1,
      title: 'Subscribe',
      icon: 'assets/images/step-1.svg',
      desc: "Select a subscription plan that suits your child's learning needs and preferences."
    },
    {
      id: 2,
      title: 'Personalize Your Box',
      icon: 'assets/images/step-2.svg',
      desc: "Tell us about your child's age, interests, and learning goals, and we'll customize their surprise box accordingly."
    },
    {
      id: 3,
      title: 'Receive Your Surprise Box',
      icon: 'assets/images/step-3.svg',
      desc: "Sit back and relax as your child eagerly awaits the arrival of their monthly surprise box filled with engaging learning materials."
    }
  ]

}
