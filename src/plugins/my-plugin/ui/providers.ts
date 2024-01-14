import { addActionBarItem } from '@vendure/admin-ui/core';

export default [
    addActionBarItem({
        id: 'test-button',
        label: 'Test Button',
        locationId: 'order-list',
    }),
];