import { expect, it } from "vitest";
import { Slug } from "./slug";

it("should be able to create a new slug from text", () => {
  const slug = Slug.createFromText("Example slug question title")

  expect(slug.value).toEqual("example-slug-question-title")
})