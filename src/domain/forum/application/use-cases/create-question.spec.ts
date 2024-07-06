import { Question } from '../../enterprise/entities/question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => { },
}

it('should be able to create a question', async () => {
  const answerQuestion = new CreateQuestionUseCase(fakeQuestionRepository)

  const { question } = await answerQuestion.execute({
    authorId: '1',
    title: 'New Question',
    content: 'Question content',
  })

  expect(question.id).toBeTruthy()
  expect(question.title).toEqual('New Question')
  expect(question.content).toEqual('Question content')
})
