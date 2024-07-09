import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface QuestionAttachmentsProps {
  questionId: UniqueEntityID
  attachmentId: UniqueEntityID
}

export class QuestionAttachments extends Entity<QuestionAttachmentsProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachmentId() {
    return this.props.attachmentId
  }

  static create(props: QuestionAttachmentsProps, id?: UniqueEntityID) {
    const questionAttachment = new QuestionAttachments(props, id)

    return questionAttachment
  }
}
