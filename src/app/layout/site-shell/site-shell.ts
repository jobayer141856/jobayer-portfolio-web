import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-site-shell',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './site-shell.html',
  styleUrl: './site-shell.css',
})
export class SiteShell {}
