import { PLWEBPage } from './app.po';

describe('plweb App', function() {
  let page: PLWEBPage;

  beforeEach(() => {
    page = new PLWEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
