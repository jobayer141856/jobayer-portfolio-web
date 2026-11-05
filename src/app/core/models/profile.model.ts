export interface SocialLink {
  readonly platform: string;
  readonly url: string;
  readonly label: string;
}

export interface Profile {
  readonly displayName: string;
  readonly headline: string;
  readonly shortIntro: string;
  readonly biography?: string;
  readonly profileImageUrl?: string;
  readonly profileImageAlt?: string;
  readonly resumeUrl?: string;
  readonly publicEmail?: string;
  readonly socialLinks: readonly SocialLink[];
}
