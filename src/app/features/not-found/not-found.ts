import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../core/services/meta.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound implements OnInit {
  private readonly meta = inject(MetaService);

  ngOnInit(): void {
    this.meta.setPageMeta({
      title: 'Page Not Found',
      description: 'The requested page could not be found on this portfolio website.',
      noIndex: true,
    });
  }
}
