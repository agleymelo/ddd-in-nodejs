import { Either, left, right } from './either'

function doSomething(shouldSuccess: boolean): Either<string, number> {
  if (shouldSuccess) {
    return right(10)
  } else {
    return left('error')
  }
}

it('success, result', () => {
  const result = doSomething(true)

  expect(result.isRight()).toBe(true)
})

it('failure, result', () => {
  const result = left('failure')

  expect(result.isLeft()).toBe(true)
  expect(result.isRight()).toBe(false)
})
