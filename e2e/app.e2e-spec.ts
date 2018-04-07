import { Angular4DatepickerExamplePage } from './app.po';

describe('angular4-datepicker-example App', () => {
  let page: Angular4DatepickerExamplePage;

  beforeEach(() => {
    page = new Angular4DatepickerExamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
