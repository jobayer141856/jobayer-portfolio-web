import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface PageMetaOptions {
  readonly title: string;
  readonly description: string;
  readonly canonicalUrl?: string;
  readonly ogImage?: string;
  readonly noIndex?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly defaultSiteTitle = 'Jobayer | Software Engineer';

  setPageMeta(options: PageMetaOptions): void {
    const fullTitle = options.title ? `${options.title} | Jobayer` : this.defaultSiteTitle;

    this.titleService.setTitle(fullTitle);
    this.metaService.updateTag({ name: 'description', content: options.description });
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: options.description });
    this.metaService.updateTag({ name: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: options.description });

    if (options.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: options.ogImage });
      this.metaService.updateTag({ name: 'twitter:image', content: options.ogImage });
    }

    if (options.noIndex) {
      this.metaService.updateTag({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
    }
  }
}
