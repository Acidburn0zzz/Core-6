import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import { schema, rules } from '@ioc:Adonis/Core/Validator';

export default class RoundValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    question: schema.string({ trim: true }, [rules.maxLength(500)]),
    answers: schema.array([rules.distinct('answer')]).members(
      schema.object().members({
        prefix: schema.string.optional({ trim: true }, [rules.maxLength(20)]),
        answer: schema.string({ trim: true }, [rules.maxLength(80)]),
      }),
    ),
    themeId: schema.number([rules.exists({ table: 'themes', column: 'id' })]),
    difficultyId: schema.number([rules.exists({ table: 'difficulties', column: 'id' })]),
  });

  public cacheKey = this.ctx.routeKey;

  public messages = {
    'question.required': 'Question manquante',
    'question.maxLength': 'La reponse ne doit pas faire plus de {{ options.maxLength }} caractères',
    'answers.required': 'Réponse manquante',
    'answers.maxLength': 'La reponse ne doit pas faire plus de {{ options.maxLength }} caractères',
    'answers.distinct': 'Les réponses doivent être différentes',
    'answers.*.answer.required': 'Un champ réponse ne peut pas être vide',
    'answers.*.answer.maxLength':
      'Les réponse ne peuvent pas faire plus de {{ options.maxLength }} caractères',
    'answers.*.prefix.maxLength':
      'Les préfix ne peuvent pas faire plus de {{ options.maxLength }} caractères',
    'themeId.required': 'Thème manquant',
    'themeId.exists': "Le thème sélectionné n'existe pas 🤔",
    'difficultyId.required': 'Difficulté manquante',
    'difficultyId.exists': "La difficulté sélectionnée n'existe pas 🤔",
  };
}
