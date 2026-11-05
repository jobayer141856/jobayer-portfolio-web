export interface Experience {
  readonly id: string;
  readonly organization: string;
  readonly role: string;
  readonly employmentType?: string;
  readonly startDate: string;
  readonly endDate?: string;
  readonly isCurrent: boolean;
  readonly location?: string;
  readonly summary?: string;
  readonly responsibilities?: readonly string[];
  readonly technologyTags?: readonly string[];
}
