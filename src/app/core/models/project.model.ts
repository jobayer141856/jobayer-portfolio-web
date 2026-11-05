export interface ProjectImage {
  readonly url: string;
  readonly alt: string;
}

export interface Project {
  readonly id: string;
  readonly slug: string;
  readonly title: string;
  readonly shortSummary: string;
  readonly fullDescription?: string;
  readonly coverImageUrl?: string;
  readonly coverImageAlt?: string;
  readonly galleryImages?: readonly ProjectImage[];
  readonly technologyTags: readonly string[];
  readonly category?: string;
  readonly role?: string;
  readonly contributions?: string;
  readonly challenges?: string;
  readonly outcomes?: string;
  readonly liveDemoUrl?: string;
  readonly repositoryUrl?: string;
  readonly isFeatured: boolean;
  readonly publishedAt?: string;
}
