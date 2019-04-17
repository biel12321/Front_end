import { FrontQuartaPage } from './app.po';

describe('front-quarta App', () => {
  let page: FrontQuartaPage;

  beforeEach(() => {
    page = new FrontQuartaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
