import { TodoAppPage } from './app.po';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it('should display todos text', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Todos');
  });
});
