import { randomUUID } from "crypto"

export class UniqueEntityID {
  private value: string

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  toString() {
    return this.value.toString()
  }

  toValue() {
    return this.value
  }
}