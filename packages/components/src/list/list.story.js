import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './list';

const mockData = [
    {
        primaryLabel: 'primaryLabel',
        primaryData: 'primaryData',
        secondaryLabel: 'secondaryLabel',
        secondaryData: 'secondaryData'
    },
    {
        primaryLabel: 'primaryLabel 1',
        primaryData: 'primaryData 1',
        secondaryLabel: 'secondaryLabel 2',
        secondaryData: 'secondaryData 2'
    }
]

storiesOf('List', module).add('default', () => <List items={mockData}/>);