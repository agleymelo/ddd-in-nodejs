import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import {
  AnswerAttachments,
  AnswerAttachmentsProps,
} from '@/domain/forum/enterprise/entities/answer-attachment'

export function makeAnswerAttachment(
  override: Partial<AnswerAttachmentsProps> = {},
  id?: UniqueEntityID,
) {
  const answerAttachments = AnswerAttachments.create(
    {
      answerId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  )

  return answerAttachments
}
