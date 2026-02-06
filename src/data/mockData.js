export const CHAMA_PACKAGES = [
    {
        id: 'p1',
        name: 'Starter Savings',
        contributionAmount: 1000,
        frequency: 'Weekly',
        memberCount: 10,
        totalPayout: 10000,
        description: 'Perfect for individuals starting their savings journey.',
        payoutInterval: 'Weekly',
        category: 'Basic'
    },
    {
        id: 'p2',
        name: 'Monthly Growth',
        contributionAmount: 5000,
        frequency: 'Monthly',
        memberCount: 12,
        totalPayout: 60000,
        description: 'A moderate savings plan for long-term goals.',
        payoutInterval: 'Monthly',
        category: 'Standard'
    },
    {
        id: 'p3',
        name: 'Elite Business',
        contributionAmount: 20000,
        frequency: 'Monthly',
        memberCount: 8,
        totalPayout: 160000,
        description: 'High-yield savings for business capital and investment.',
        payoutInterval: 'Monthly',
        category: 'Elite'
    },
    {
        id: 'p4',
        name: 'Retirement Pot',
        contributionAmount: 10000,
        frequency: 'Monthly',
        memberCount: 15,
        totalPayout: 150000,
        description: 'Long term focused savings for a secure future.',
        payoutInterval: 'Monthly',
        category: 'Standard'
    },
    {
        id: 'p5',
        name: 'Education Fund',
        contributionAmount: 2500,
        frequency: 'Bi-Weekly',
        memberCount: 20,
        totalPayout: 50000,
        description: 'Save specifically for tuition and school expenses.',
        payoutInterval: 'Monthly',
        category: 'Basic'
    },
    {
        id: 'p6',
        name: 'Holiday Savings',
        contributionAmount: 2000,
        frequency: 'Weekly',
        memberCount: 12,
        totalPayout: 24000,
        description: 'Save for that dream vacation together with friends.',
        payoutInterval: 'Weekly',
        category: 'Basic'
    },
    {
        id: 'p7',
        name: 'Real Estate Pool',
        contributionAmount: 50000,
        frequency: 'Monthly',
        memberCount: 10,
        totalPayout: 500000,
        description: 'Large pool for pooling property deposit funds.',
        payoutInterval: 'Monthly',
        category: 'Elite'
    },
];

export const USER_ENROLLED_PACKAGES = [
    {
        packageId: 'p2',
        joinedDate: '2023-11-05',
        totalContributed: 30000,
        nextPayoutDate: '2024-06-15',
        status: 'Active',
        paymentStatus: 'Up to Date',
        payoutProgress: 60, // percentage
    },
    {
        packageId: 'p5',
        joinedDate: '2024-01-10',
        totalContributed: 10000,
        nextPayoutDate: '2024-08-20',
        status: 'Active',
        paymentStatus: 'Pending',
        payoutProgress: 25,
    }
];

export const CONTRIBUTION_HISTORY = [
    { month: 'Jan', amount: 7500 },
    { month: 'Feb', amount: 7500 },
    { month: 'Mar', amount: 10000 },
    { month: 'Apr', amount: 7500 },
    { month: 'May', amount: 12500 },
    { month: 'Jun', amount: 7500 },
];

export const LOAN_APPLICATIONS = [
    {
        id: 'L1',
        amount: 50000,
        term: '6 Months',
        status: 'Approved',
        progress: 40,
        appliedDate: '2024-02-15',
        repaymentLeft: 30000,
    },
    {
        id: 'L2',
        amount: 15000,
        term: '2 Months',
        status: 'Repaid',
        progress: 100,
        appliedDate: '2023-10-01',
        repaymentLeft: 0,
    }
];

export const NOTIFICATIONS = [
    {
        id: 1,
        type: 'reminder',
        title: 'Contribution Due',
        message: 'Your Monthly Growth contribution of KES 5,000 is due in 3 days.',
        date: '2024-06-02',
        read: false,
    },
    {
        id: 2,
        type: 'success',
        title: 'Payment Successful',
        message: 'KES 2,500 Education Fund contribution received successfully.',
        date: '2024-06-01',
        read: true,
    },
    {
        id: 3,
        type: 'update',
        title: 'Loan Approved',
        message: 'Your loan application of KES 50,000 has been approved.',
        date: '2024-02-16',
        read: true,
    }
];

export const MOCK_MEMBERS = [
    { id: 1, name: 'John Doe', joinDate: '2023-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', joinDate: '2023-02-10', status: 'Active' },
    { id: 3, name: 'Samuel Wanjiru', joinDate: '2023-03-05', status: 'Active' },
    { id: 4, name: 'Mary Atieno', joinDate: '2023-03-20', status: 'Active' },
    { id: 5, name: 'David Kamau', joinDate: '2023-04-12', status: 'Active' },
];

export const PAYOUT_ROTATION = [
    { memberId: 3, name: 'Samuel Wanjiru', date: '2024-05-01', amount: 10000, status: 'Paid' },
    { memberId: 1, name: 'John Doe', date: '2024-05-08', amount: 10000, status: 'Pending' },
    { memberId: 4, name: 'Mary Atieno', date: '2024-05-15', amount: 10000, status: 'Upcoming' },
    { memberId: 2, name: 'Jane Smith', date: '2024-05-22', amount: 10000, status: 'Upcoming' },
    { memberId: 5, name: 'David Kamau', date: '2024-05-29', amount: 10000, status: 'Upcoming' },
];
