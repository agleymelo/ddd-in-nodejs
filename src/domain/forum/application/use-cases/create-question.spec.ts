import { InMemoryQuestionRepository } from 'test/repositories/in-memory-questions-repository'
import { CreateQuestionUseCase } from './create-question'

let inMemoryQuestionsRepository: InMemoryQuestionRepository
let sut: CreateQuestionUseCase

describe('Create Question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  it('should be able to create a question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'New Question',
      content: 'Question content',
    })

    expect(question.id).toBeTruthy()
    expect(question.title).toEqual('New Question')
    expect(question.content).toEqual('Question content')

    expect(inMemoryQuestionsRepository.items[0].id).toEqual(question.id)
  })
})
