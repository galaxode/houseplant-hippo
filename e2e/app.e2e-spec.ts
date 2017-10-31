import { PlantBookPage } from './app.po';

describe('plant-book App', () => {
  let page: PlantBookPage;

  beforeEach(() => {
    page = new PlantBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
