import { emailRegex } from "./email";

describe("emailRegex Utility Function", () => {
  it("should return true for valid email addresses", () => {
    const validEmails = [
      "test@example.com",
      "user.name@domain.co",
      "name@sub.domain.com",
    ];
    validEmails.forEach((email) => {
      expect(emailRegex.test(email)).toBe(true);
    });
  });

  it("should return false for invalid email addresses", () => {
    const invalidEmails = [
      "invalid-email",
      "user@",
      "@domain.com",
      "user@domain",
    ];
    invalidEmails.forEach((email) => {
      expect(emailRegex.test(email)).toBe(false);
    });
  });
});
