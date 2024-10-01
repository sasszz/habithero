import { generateReferralCode } from './referralcode';

describe('generateReferralCode', () => {
  it('should generate a referral code of length 8 consisting of alphanumeric characters', () => {
    const referralCode = generateReferralCode();

    // Check if the referral code has a length of 8
    expect(referralCode.length).toBe(8);

    // Check if the referral code contains only uppercase letters and numbers
    const alphanumericRegex = /^[A-Z0-9]+$/;
    expect(referralCode).toMatch(alphanumericRegex);
  });

  it('should generate a unique referral code each time', () => {
    const code1 = generateReferralCode();
    const code2 = generateReferralCode();
    
    // The two generated codes should be different
    expect(code1).not.toBe(code2);
  });
});
