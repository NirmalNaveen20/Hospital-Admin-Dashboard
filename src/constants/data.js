import images from "./images"

const data = {
    user: {
        name: 'LifeCare Hospital',
        img: images.avt
    },
    summary: [
        {
            title: 'Ambulance',
            subtitle: 'Available ambulance today',
            value: '12',
            percent: 37
        },
        {
            title: 'Channeling',
            subtitle: 'Total channels today',
            value: '3000',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: '$2067',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '346',
            percent: 79
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$6378',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Visits'
        },
        {
            value: '9.876K',
            title: 'Patients'
        },
        {
            value: '1.234K',
            title: 'Prescriptions'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Online Channeling',
            value: 70
        },
        {
            title: 'Site Search',
            value: 40
        },
        {
            title: 'Patient Ratings',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data