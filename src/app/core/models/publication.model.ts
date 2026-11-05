export interface Publication {
  readonly id: string;
  readonly title: string;
  readonly authors: readonly string[];
  readonly venue: string;
  readonly publicationYear: number;
  readonly publicationDate?: string;
  readonly doi?: string;
  readonly officialUrl?: string;
  readonly abstract?: string;
  readonly pdfUrl?: string;
}
