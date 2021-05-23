import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});


test('should correctly expenses summary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23567457345} />);
    expect(wrapper).toMatchSnapshot();
});