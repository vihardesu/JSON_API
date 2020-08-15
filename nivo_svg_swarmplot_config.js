//https://nivo.rocks/swarmplot/

const config = {
    "groups": ['Dexamethasone', 'Remdesivir', 'Favipriavir', 'coronavirus', 'inflammation', 'cytokine'],
    "groupBy": "context",
    "identity": "id",
    "value": "correlation",
    "valueFormat": ".2f",
    "valueScale": { 
        type: 'linear', 
        min: 0, 
        max: 1, 
        reverse: false
    },
    "size": { 
        key: 'market_cap', 
        values: [ 1, 192 ], 
        sizes: [ 5, 30 ] 
    },
    "spacing": 0,
    "forceStrength": 4,
    "simulationIterations": 100,
    "borderColor": {
        from: 'color',
        modifiers: [
            [
                'darker',
                0.6
            ],
            [
                'opacity',
                0.5
            ]
        ]
    },
    "margin":{ 
        top: 80, 
        right: 100, 
        bottom: 80, 
        left: 100
    },
    "axisTop":{
        orient: 'top',
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -46
    },
    "axisRight":{
        orient: 'right',
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: 76
    },
    "axisBottom":{
        orient: 'bottom',
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'group if vertical, price if horizontal',
        legendPosition: 'middle',
        legendOffset: 46
    },
    "axisLeft":{
        orient: 'left',
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'price if vertical, group if horizontal',
        legendPosition: 'middle',
        legendOffset: -76
    },
    "motionStiffness": 50,
    "motionDamping": 10
}

export default config;