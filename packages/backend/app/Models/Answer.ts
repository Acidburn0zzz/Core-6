import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import { DateTime } from 'luxon';

export default class Answer extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public roundId: number;

  @column()
  public answer: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  public extrapolateAnswer(): Answer[] {
    const listOfPrefixes = ['un', 'une', 'le', 'la', 'les', 'des'];
    const listOfAnswers: Answer[] = [this];
    listOfPrefixes.forEach((prefix) => {
      const newAnswer = new Answer();
      newAnswer.answer = prefix + ' ' + this.answer;
      listOfAnswers.push(newAnswer);
    });
    return listOfAnswers;
  }

  public normalizedValue(): string {
    let value: string = this.answer;
    // ToLowerCase
    value = value.toLowerCase();
    // Remove accents
    value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return value;
  }
}
