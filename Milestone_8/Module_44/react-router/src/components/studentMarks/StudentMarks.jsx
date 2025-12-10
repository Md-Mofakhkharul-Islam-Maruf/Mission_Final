import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const StudentMarks = ({ studentMarksPromise }) => {
    const studentMarksres = use(studentMarksPromise)
    const marksData = studentMarksres.data
    const studentdata = marksData.map(item => {
        const student = {
            id: item.id,
            name: item.name,
            physics: item.subjects.physics,
            chemistry: item.subjects.chemistry,
            math: item.subjects.math,
        }
        return student;
    })
    console.log(studentdata)
    return (
        <div>
            <BarChart width={500} height={500} data={studentdata}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'physics'} fill='red'></Bar>
                <Bar dataKey={'math'} fill='blue'></Bar>
                <Bar dataKey={'chemistry'} fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default StudentMarks;