export interface Certification {
  readonly id: string;
  readonly title: string;
  readonly issuer: string;
  readonly issueDate: string;
  readonly credentialId?: string;
  readonly credentialUrl?: string;
  readonly description?: string;
  readonly imageUrl?: string;
}
