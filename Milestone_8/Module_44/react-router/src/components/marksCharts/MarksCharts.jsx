import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const MarksCharts = ({marksdata}) => {
    console.log(marksdata)

    return (
        <div>
            <LineChart width={1000} height={500} data={marksdata}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
                <Line  dataKey='physics' stroke='red'></Line>
                <Line  dataKey='chemistry' stroke='blue'></Line>
                <Line  dataKey='math' stroke='green'></Line>
            </LineChart>
        </div>
    );
};

export default MarksCharts;