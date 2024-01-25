import React, { useState } from 'react';
import { AdminSideNav } from '../AdminDashboard/AdminSideNav';

const FindDuplicatesAndMissing = () => {
    const [nums, setNums] = useState([2, 4, 3, 3]);
    const [result, setResult] = useState([]);

    const findDuplicateAndMissing = () => {
    // Create a frequency map to keep track of occurrences of each number
    const frequencyMap = {};
    let duplicate, missing;

    // Iterate through the input array to populate the frequency map
    for (const num of nums) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    // Iterate from 1 to the length of the array to find duplicate and missing numbers
    for (let i = 1; i <= nums.length; i++) {
      // Check if the frequency is 2, indicating a duplicate
      if (frequencyMap[i] === 2) {
        duplicate = i;
      }
      // Check if the frequency is undefined, indicating a missing number
      else if (frequencyMap[i] === undefined) {
        missing = i;
      }
    }

    // Set the result in the state
    setResult([duplicate, missing]);
  };

    const refreshNumbers = () => {
        // You can modify this to get input from the user or any other source
        setNums([2, 4, 3, 3]);
        setResult([]);
      };

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <div style={{ position: 'fixed' }}>
                    <AdminSideNav />
                </div>
                <div className="layout-page">
                    <div className="content-wrapper">
                        <div className="container-xxl flex-grow-1">
                            <p>Input: {JSON.stringify(nums)}</p>
                            <p>Output: {JSON.stringify(result)}</p>
                            <button onClick={findDuplicateAndMissing}>Find Duplicates and Missing</button>
                            <button onClick={refreshNumbers}>Refresh</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDuplicatesAndMissing;
