import { Either, left, right } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answers-comment-repository'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentUseCaseReply = Either<string, {}>

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseReply> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)

    if (!answerComment) {
      return left('Answer comment not found.')
    }

    if (answerComment.authorId.toString() !== authorId) {
      return left('Not allowed.')
    }

    await this.answerCommentsRepository.delete(answerComment)

    return right({})
  }
}