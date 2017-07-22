import { AngularmbPage } from './app.po';

describe('angularmb App', () => {
  let page: AngularmbPage;

  beforeEach(() => {
    page = new AngularmbPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
