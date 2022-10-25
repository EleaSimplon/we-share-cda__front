/* eslint-disable */
export class Config {
    constructor(
      public familyLevelsCount: number
    ) {
    }
  
    public serialize(): string {
      const config: any = {
        family_levels_count: this.familyLevelsCount,
      }
      return JSON.stringify(config)
    }
  
    public deserialize(configAsString: string) {
      try {
        const obj = JSON.parse(configAsString)
        this.familyLevelsCount = obj.family_levels_count
        // eslint-disable-next-line no-empty
      } catch (exc){
      }
    }
  }
  
  export function makeConfig(jsonData: any = null): Config {
    if (!jsonData) {
      jsonData = {}
    }
    return new Config(
      jsonData.family_levels_count || 3
    )
}