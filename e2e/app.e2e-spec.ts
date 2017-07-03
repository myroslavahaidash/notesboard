import { NotesboardPage } from './app.po';

describe('notesboard App', () => {
  let page: NotesboardPage;

  beforeEach(() => {
    page = new NotesboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
