import { AngularEssentialPage } from './app.po';

describe('angular-essential App', function() {
  let page: AngularEssentialPage;

  beforeEach(() => {
    page = new AngularEssentialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
