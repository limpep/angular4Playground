import { PlayGroundPage } from './app.po';

describe('play-ground App', () => {
  let page: PlayGroundPage;

  beforeEach(() => {
    page = new PlayGroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
