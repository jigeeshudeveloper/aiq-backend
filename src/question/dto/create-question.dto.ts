export class CreateQuestionDto {
  readonly question: string;
  readonly options: string[];
  readonly correct_index: number;
}
