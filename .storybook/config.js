import {configure} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

setOptions({
  name: 'Tasker',
  url: '',
  addonPanelInRight: true,
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
});

const req = require.context('../src', true, /.(stories|story).[jt]sx?$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
