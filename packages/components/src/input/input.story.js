import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './input';

storiesOf('Input', module).add('default', () => <Input>{'Button'}</Input>);