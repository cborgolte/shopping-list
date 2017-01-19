import { NgFirstPage } from './app.po';

describe('ng-first App', function() {
  let page: NgFirstPage;

  beforeEach(() => {
    page = new NgFirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
