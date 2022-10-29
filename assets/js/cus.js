let asidebtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');

asidebtn.addEventListener('click', () => {
    aside.classList.add('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
    backdrop.style.zIndex = 10;

});
backdrop.addEventListener('click', () => {
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
    backdrop.style.zIndex = 0;
});


// chart js

const labels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',




];

const data = {
    labels: labels,
    datasets: [{
        borderRadius: 6,
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 32, 10, 5, 28, 23, 5, 14, 15, 21, 45, 30, 22, 35, 20],
    },
    {
        borderRadius: 6,
        label: 'My Second dataset',
        backgroundColor: 'rgb(255, 99, 132,0.2)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45, 32, 10, 5, 28, 23, 5, 14, 15, 21, 45, 30, 22, 35, 20],
    }
    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    borderColor: 'transparent',
                    borderDash: [6]

                },
                ticks: {
                    stepSize: 10
                }
            }
        },
        plugins: {
            legend: {

                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'

                }
            }
        }
    }
};


const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


// Data Table 

$(document).ready(function () {
    $('#example').DataTable({
        pageLength: 5,
    });
});


const vlabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const vdata = {
    labels: vlabels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
        borderRadius: 6,
    },
    {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132,0.2)',
        borderColor: 'rgb(255, 99, 132,0.2))',
        data: [3, 14, 20, 2, 30, 26, 39],
        borderRadius: 6,

    }]
};

const vconfig = {
    type: 'bar',
    data: vdata,
    options: {
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                }
            },
            y: {
                grid: {
                    borderColor: 'transparent',
                    borderDash: [6]

                },
                ticks: {
                    stepSize: 20
                }
            }
        },
        plugins: {
            legend: {

                position: 'bottom',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle'

                }
            }
        }
    }
}


const myVisitor = new Chart(
    document.getElementById('myVisitor'),
    vconfig
);