import { RegisterModule } from './register.module';

describe('RegisterModule', () => {
  let signupModule: RegisterModule;

  beforeEach(() => {
    signupModule = new RegisterModule();
  });

  it('should create an instance', () => {
    expect(signupModule).toBeTruthy();
  });
});
