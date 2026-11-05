export interface Education {
  readonly id: string;
  readonly institution: string;
  readonly qualification: string;
  readonly department?: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly result?: string;
  readonly description?: string;
  readonly institutionUrl?: string;
}
