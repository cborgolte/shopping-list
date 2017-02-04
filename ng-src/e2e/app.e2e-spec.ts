import { NgFirstPage } from './app.po';

describe('shopping-list', function() {
  let page: NgFirstPage;

  beforeEach(() => {
    page = new NgFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
