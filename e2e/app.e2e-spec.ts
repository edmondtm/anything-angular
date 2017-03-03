import { AnythingAngular2Page } from './app.po';

describe('anything-angular2 App', function() {
  let page: AnythingAngular2Page;

  beforeEach(() => {
    page = new AnythingAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('any works!');
  });
});
