export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly description?: string;
  readonly displayOrder?: number;
}

export interface SkillGroup {
  readonly category: string;
  readonly skills: readonly Skill[];
}
