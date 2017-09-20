import { Rig.JsPage } from './app.po';

describe('rig.js App', () => {
  let page: Rig.JsPage;

  beforeEach(() => {
    page = new Rig.JsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
