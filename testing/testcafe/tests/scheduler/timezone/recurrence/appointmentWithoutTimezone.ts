import { ClientFunction } from 'testcafe';
import { createScreenshotsComparer } from 'devextreme-screenshot-comparer';
import url from '../../../../helpers/getPageUrl';
import { getScreenshotName } from '../timezoneTestingUtils';
import createWidget from '../../../../helpers/createWidget';
import SelectBox from '../../../../model/selectBox';
import Scheduler from '../../../../model/scheduler';
import { restoreBrowserSize } from '../../../../helpers/restoreBrowserSize';

const SELECT_SELECTOR = '#container';
const SCHEDULER_SELECTOR = '#otherContainer';
const SCREENSHOT_BASE_NAME = 'without-timezone-recurrent';
const TEST_TIMEZONES = ['Etc/GMT-10', 'Etc/GMT+1', 'Etc/GMT+10'];
const TEST_CURSOR_OPTIONS = { speed: 0.1 };

const createTimezoneSelect = async (
  selector: string,
  items: string[],
  schedulerSelector: string,
): Promise<void> => {
  await ClientFunction(() => {
    ($(selector) as any).dxSelectBox({
      items,
      width: 240,
      value: items[1],
      onValueChanged(data) {
        const scheduler = ($(schedulerSelector) as any).dxScheduler('instance');
        scheduler.option('timeZone', data.value);
      },
    });
  }, {
    dependencies: { selector, schedulerSelector, items },
  })();
};

const selectTimezoneInUI = async (t: TestController, selectBox: SelectBox, timezoneIdx: number) => {
  await t.click(selectBox.element, TEST_CURSOR_OPTIONS);
  const timezonesList = await selectBox.getList();

  await t.click(timezonesList.getItem(timezoneIdx).element, TEST_CURSOR_OPTIONS);
};

fixture`Recurrent appointments without timezone in scheduler with timezone`
  .page(url(__dirname, '../../../container.html'));

test('Should correctly display the recurrent weekly appointment without timezone', async (t) => {
  const selectBox = new SelectBox(SELECT_SELECTOR);
  const schedulerWorkspace = new Scheduler(SCHEDULER_SELECTOR).workSpace;
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  // expected date: 4/28/2021 10:00 AM - 12:00 PM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'weekly-appointment__same-timezone'), schedulerWorkspace);

  await selectTimezoneInUI(t, selectBox, 0);
  // expected date: 4/28/2021 9:00 PM - 11:00 PM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'weekly-appointment__greater-timezone'), schedulerWorkspace);

  await selectTimezoneInUI(t, selectBox, 2);
  // expected date: 4/28/2021 1:00 AM - 3:00 AM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'weekly-appointment__lower-timezone'), schedulerWorkspace);

  await t.expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
}).before(async (t) => {
  const schedulerTimezone = TEST_TIMEZONES[1];

  await restoreBrowserSize(t);

  await createTimezoneSelect(SELECT_SELECTOR, TEST_TIMEZONES, SCHEDULER_SELECTOR);
  await createWidget('dxScheduler', {
    dataSource: [{
      allDay: false,
      startDate: new Date('2021-04-28T11:00:00.000Z'),
      endDate: new Date('2021-04-28T13:00:00.000Z'),
      recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE',
      text: 'Test',
    }],
    timeZone: schedulerTimezone,
    currentView: 'week',
    currentDate: new Date(2021, 3, 28),
    startDayHour: 0,
    cellDuration: 180,
    width: 1000,
    height: 585,
  }, false, SCHEDULER_SELECTOR);
});

test('Should correctly display the recurrent monthly appointment without timezone', async (t) => {
  const selectBox = new SelectBox(SELECT_SELECTOR);
  const schedulerWorkspace = new Scheduler(SCHEDULER_SELECTOR).workSpace;
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  // expected date: 4/28/2021 10:00 AM - 12:00 PM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'monthly-appointment__same-timezone'), schedulerWorkspace);

  await selectTimezoneInUI(t, selectBox, 0);
  // expected date: 4/28/2021 9:00 PM - 11:00 PM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'monthly-appointment__greater-timezone'), schedulerWorkspace);

  await selectTimezoneInUI(t, selectBox, 2);
  // expected date: 4/28/2021 1:00 AM - 3:00 AM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'monthly-appointment__lower-timezone'), schedulerWorkspace);

  await t.expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
}).before(async (t) => {
  const schedulerTimezone = TEST_TIMEZONES[1];

  await restoreBrowserSize(t);

  await createTimezoneSelect(SELECT_SELECTOR, TEST_TIMEZONES, SCHEDULER_SELECTOR);
  await createWidget('dxScheduler', {
    dataSource: [{
      allDay: false,
      startDate: new Date('2021-04-28T11:00:00.000Z'),
      endDate: new Date('2021-04-28T13:00:00.000Z'),
      recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE',
      text: 'Test',
    }],
    timeZone: schedulerTimezone,
    currentView: 'week',
    currentDate: new Date(2021, 3, 28),
    startDayHour: 0,
    cellDuration: 180,
    width: 1000,
    height: 585,
  }, false, SCHEDULER_SELECTOR);
});

test('Should correctly display the recurrent yearly appointment without timezone', async (t) => {
  const selectBox = new SelectBox(SELECT_SELECTOR);
  const schedulerWorkspace = new Scheduler(SCHEDULER_SELECTOR).workSpace;
  const { takeScreenshot, compareResults } = createScreenshotsComparer(t);

  // expected date: 4/28/2021 10:00 AM - 12:00 PM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'yearly-appointment__same-timezone'), schedulerWorkspace);

  await selectTimezoneInUI(t, selectBox, 0);
  // expected date: 4/28/2021 9:00 PM - 11:00 PM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'yearly-appointment__greater-timezone'), schedulerWorkspace);

  await selectTimezoneInUI(t, selectBox, 2);
  // expected date: 4/28/2021 1:00 AM - 3:00 AM
  await takeScreenshot(getScreenshotName(SCREENSHOT_BASE_NAME, 'yearly-appointment__lower-timezone'), schedulerWorkspace);

  await t.expect(compareResults.isValid())
    .ok(compareResults.errorMessages());
}).before(async (t) => {
  const schedulerTimezone = TEST_TIMEZONES[1];

  await restoreBrowserSize(t);

  await createTimezoneSelect(SELECT_SELECTOR, TEST_TIMEZONES, SCHEDULER_SELECTOR);
  await createWidget('dxScheduler', {
    dataSource: [{
      allDay: false,
      startDate: new Date('2021-04-28T11:00:00.000Z'),
      endDate: new Date('2021-04-28T13:00:00.000Z'),
      recurrenceRule: 'FREQ=WEEKLY;BYDAY=WE',
      text: 'Test',
    }],
    timeZone: schedulerTimezone,
    currentView: 'week',
    currentDate: new Date(2021, 3, 28),
    startDayHour: 0,
    cellDuration: 180,
    width: 1000,
    height: 585,
  }, false, SCHEDULER_SELECTOR);
});
