import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  QuestionAttachments,
  QuestionAttachmentsProps,
} from '@/domain/forum/enterprise/entities/question-attachments'

export function makeQuestionAttachment(
  override: Partial<QuestionAttachmentsProps> = {},
  id?: UniqueEntityID,
) {
  const questionAttachments = QuestionAttachments.create(
    {
      questionId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return questionAttachments
}
