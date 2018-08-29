import { AbilityDataModule } from './ability-data.module';

describe('AbilityDataModule', () => {
  let abilityDataModule: AbilityDataModule;

  beforeEach(() => {
    abilityDataModule = new AbilityDataModule();
  });

  it('should create an instance', () => {
    expect(abilityDataModule).toBeTruthy();
  });
});
