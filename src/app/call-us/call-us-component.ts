import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
  faGithub,
  faTwitter,
  faWhatsapp} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'call-us',
  templateUrl: './call-us-component.html',
  styleUrls: ['./call-us-component.css']
})
export class CallUsComponent implements OnInit {

  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faGooglePlus = faGooglePlusG;
  faGithub = faGithub;
  faTwitter = faTwitter;
  faWhatsapp = faWhatsapp;

  constructor() { }

  ngOnInit(): void {
  }

}
