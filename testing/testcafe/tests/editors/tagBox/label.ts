import { compareScreenshot } from 'devextreme-screenshot-comparer';
import { changeTheme } from '../../../helpers/changeTheme';
import url from '../../../helpers/getPageUrl';
import createWidget from '../../../helpers/createWidget';

const stylingMods = ['outlined', 'underlined', 'filled'];
const themes = ['generic.light', 'material.blue.light'];

fixture`TagBox_Label`
  .page(url(__dirname, '../../container.html'))
  .afterEach(async () => {
    await changeTheme('generic.light');
  });

themes.forEach((theme) => {
  stylingMods.forEach((stylingMode) => {
    test(`Label for dxTagBox ${theme} stylingMode=${stylingMode}`, async (t) => {
      await t.click('#otherContainer');

      await t.expect(await compareScreenshot(t, `label-tag-box-styleMode=${stylingMode},theme=${theme.replace(/\./g, '-')}.png`)).ok();
    }).before(async (t) => {
      await t.resizeWindow(300, 800);
      await changeTheme(theme);

      const componentOption = {
        label: 'label text',
        items: [...Array(10)].map((_, i) => `item${i}`),
        value: [...Array(5)].map((_, i) => `item${i}`),
        stylingMode,
      };

      await createWidget('dxTagBox', {
        ...componentOption,
        multiline: false,
      });

      return createWidget('dxTagBox', {
        ...componentOption,
        multiline: true,
      }, true, '#otherContainer');
    });
  });
});
