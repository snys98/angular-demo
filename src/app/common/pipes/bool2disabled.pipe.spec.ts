import { Bool2DisabledPipe } from './bool2disabled.pipe';

describe('Bool2disabledPipe', () => {
  it('create an instance', () => {
    const pipe = new Bool2DisabledPipe();
    expect(pipe).toBeTruthy();
  });
});
