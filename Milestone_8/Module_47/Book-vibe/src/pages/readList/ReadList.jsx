import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/utilities';
import { PiArrowSquareInDuotone } from 'react-icons/pi';
import Book from '../books/Book';

const ReadList = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData()
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook()
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    }, [])
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Read Book lists</Tab>
                    <Tab>Wish lists</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I read:{readList.length}</h2>
                    {readList.map(sbook => <Book key={sbook.bookId} singleBook={sbook}></Book>)}
                </TabPanel>
                <TabPanel>
                    <h2>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;