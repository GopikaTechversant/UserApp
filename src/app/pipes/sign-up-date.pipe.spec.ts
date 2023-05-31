import { SignUpDatePipe } from './sign-up-date.pipe';

describe('SignUpDatePipe', () => {
  it('create an instance', () => {
    const pipe = new SignUpDatePipe();
    expect(pipe).toBeTruthy();
  });
});
