import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Studying',
      Title: 'technologist in software analysis and development',
      Date: 'Sep 2023 – present',
      Description: [
        'Since I finished my work period, I decided to strengthen my foundations as a software developer. My focus is to become an independent professional with the appropriate knowledge to stand out in the environment.',
        
      ]
    },
    {
      Tab: 'job',
      Title: 'Analyst developer',
      Date: 'August 2020 - sept 2023 (2 year)',
      Description: [
        'I worked with Everis Colombia and later with NTTDATA Colombia carrying out different projects in the role of Developer Analyst, projects such as automations in RPA - JOBS - BMC. ',
        'migrations of applications to Azure, creation of applications with java, .net, angular, among many others, I consider I have enough experience to hold any junior developer position. At the moment I am preparing to evolve.',
      ]
    },
    {
      Tab: 'Education',
      Title: 'Tecnico en desarrollo de software',
      Date: '2019 — 2020',
      Description: [
        'I took the Professional Technician course in software programming, when the time came I was presented with the opportunity to do an internship at Everis Colombia,',
        'I spent 6 months of internship with them, which was a great experience and introduction to the environment of developing software for customers.'
      ]
    }
  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
