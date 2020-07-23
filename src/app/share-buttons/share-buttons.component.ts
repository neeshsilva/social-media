import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector';
import config from './share-button.config';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.css']
})
export class ShareButtonsComponent implements OnInit {

  url = 'http://www.google.com/';
  pageName = '';
  topPosition: number = config.topOffset;
  leftPosition: number = config.leftOffset;

  constructor(private router: Router, private deviceService: DeviceDetectorService) {
  }

  ngOnInit(): void {
    // this.url = 'http://info.cern.ch/';
    this.url = window.location.href;
    this.pageName = this.router.url;
    // this.copyUrl.value = this.pageUrl;
    console.log('PAGE URL ', this.router.url);
    console.log('PAGE URL2 ', window.location.href);
  }

  getTopOffset() {
    return this.topPosition;
  }

  getLeftOffset() {
    return this.leftPosition;
  }

  getFacebookUrl() {
    return `https://www.facebook.com/sharer/sharer.php?u=${this.url}`;
  }

  getTwitterUrl() {
    return `https://twitter.com/intent/tweet?source=tweetbutton&text=${this.pageName}&url=${this.url}`;
  }

  getTelegramUrl() {
    return `https://t.me/share/url?url=${this.url}&text=${this.pageName}`;
  }

  getWhatsappUrl() {
    return this.deviceService.isMobile() ? `whatsapp://send?text=${this.url}` : `https://api.whatsapp.com/send?text=${this.url}`;
  }

  getCopyUrl() {
    const copyUrl = document.createElement('input');
    this.url = window.location.href;
    document.body.appendChild(copyUrl);
    copyUrl.value = this.url;
    copyUrl.select();
    document.execCommand('copy');
    document.body.removeChild(copyUrl);
    alert('URL is copied to clipboard');
  }

}
