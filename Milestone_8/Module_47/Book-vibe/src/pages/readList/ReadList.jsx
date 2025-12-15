import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utilities/utilities';
import Book from '../books/Book';

const ReadList = () => {
    const data = useLoaderData();

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');

    // Load read list once
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book =>
            convertedStoredBooks.includes(book.bookId)
        );
        setReadList(myReadList);
    }, [data]);

    // Handle sorting
    const handleSort = (type) => {
        setSort(type);

        if (type === 'pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortedByPage)
            console.log(sortedByPage)
        }
        if (type === 'rating') {
            const sortedByrating = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortedByrating)
            console.log(sortedByrating)
        }
    };

    return (
        <div className="space-y-6">
            {/* Sort Dropdown */}
            <div className="dropdown dropdown-open">
                <div tabIndex={0} role="button" className="btn m-1">
                    Sort by: {sort ? sort : 'Select'}
                </div>

                <ul
                    tabIndex={-1}
                    className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm"
                >
                    <li>
                        <a onClick={() => handleSort('pages')}>Pages</a>
                    </li>
                    <li>
                        <a onClick={() => handleSort('rating')}>Ratings</a>
                    </li>
                </ul>
            </div>

            {/* Tabs */}
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                {/* Read List */}
                <TabPanel>
                    <h2 className="text-xl font-semibold mb-4">
                        Books I Read: {readList.length}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {readList.map(book => (
                            <Book key={book.bookId} singleBook={book} />
                        ))}
                    </div>
                </TabPanel>

                {/* Wish List */}
                <TabPanel>
                    <h2 className="text-xl font-semibold">My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;
