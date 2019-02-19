import TestRenderer from 'react-test-renderer';
import BreakingNewsAlert from '../src/BreakingNewsAlert';
import React from 'react';

describe('BreakingNewsAlert', () => {
    test('renders correctly', () => {
        let breakingNewsAlert = TestRenderer.create(<BreakingNewsAlert
            cardStyle="default"
            onChange={() => {}}
        />);
        expect(breakingNewsAlert.toJSON()).toMatchSnapshot();

        breakingNewsAlert = TestRenderer.create(<BreakingNewsAlert
            cardStyle="default"
            checked={true}
            onChange={() => {}}
        />);
        expect(breakingNewsAlert.toJSON()).toMatchSnapshot();
    });

    test('renders persoonlijk correctly', () => {
        let breakingNewsAlert = TestRenderer.create(<BreakingNewsAlert
            cardStyle="persoonlijk"
            onChange={() => {}}
        />);
        expect(breakingNewsAlert.toJSON()).toMatchSnapshot();

        breakingNewsAlert = TestRenderer.create(<BreakingNewsAlert
            cardStyle="persoonlijk"
            checked={true}
            onChange={() => {}}
        />);
        expect(breakingNewsAlert.toJSON()).toMatchSnapshot();
    });
});
