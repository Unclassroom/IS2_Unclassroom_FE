import { TablesModule } from './tables.module';

describe('StatModule', () => {
  let statModule: TablesModule;

  beforeEach(() => {
    statModule = new TablesModule();
  });

  it('should create an instance', () => {
    expect(statModule).toBeTruthy();
  });
});
