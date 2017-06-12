import { StilusMatriculaPage } from './app.po';

describe('stilus-matricula App', () => {
  let page: StilusMatriculaPage;

  beforeEach(() => {
    page = new StilusMatriculaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
