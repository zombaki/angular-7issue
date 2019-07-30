

export class SectionTemplate {
    name : string;
        constructor(init?: Partial<SectionTemplate>) {
        Object.assign(this, init);
    }
}
export class TestData{
  parent : SectionTemplate;
      constructor(init?: Partial<TestData>) {
        Object.assign(this, init);
    }
}