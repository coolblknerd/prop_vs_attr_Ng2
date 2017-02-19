import { PropVsAttrPage } from './app.po';

describe('prop-vs-attr App', function() {
  let page: PropVsAttrPage;

  beforeEach(() => {
    page = new PropVsAttrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
