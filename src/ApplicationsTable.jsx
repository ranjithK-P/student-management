import React, { useState, useEffect } from 'react';
import { Table, Input, Space } from 'antd';
import axios from 'axios';

const { Search } = Input;

const ApplicationsTable = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://educhain.free.beeceptor.com/applications');
        setApplications(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);
  
    // Safely filter through data
    const filtered = applications.filter(
      (app) =>
        String(app.applicantName || '').toLowerCase().includes(value.toLowerCase()) ||
        String(app.status_En || '').toLowerCase().includes(value.toLowerCase()) ||
        String(app.studentID || '').toLowerCase().includes(value.toLowerCase())
    );
  
    setFilteredData(filtered);
  };
  
  

  const columns = [
    {
      title: 'Application No',
      dataIndex: 'applicationNO',
      key: 'applicationNO',
      sorter: (a, b) => String(a.applicationNO).localeCompare(String(b.applicationNO)),
    },
    {
      title: 'Applicant Name',
      dataIndex: 'applicantName',
      key: 'applicantName',
      sorter: (a, b) => a.applicantName.localeCompare(b.applicantName),
    },
    {
      title: 'Application Date',
      dataIndex: 'applicationDate',
      key: 'applicationDate',
      sorter: (a, b) => new Date(a.applicationDate) - new Date(b.applicationDate),
    },
    {
      title: 'Student ID',
      dataIndex: 'studentID',
      key: 'studentID',
    },
    {
      title: 'Paid Amount',
      dataIndex: 'paidAmount',
      key: 'paidAmount',
    },
    {
      title: 'Status (English)',
      dataIndex: 'status_En',
      key: 'status_En',
    },
    {
      title: 'Status (Arabic)',
      dataIndex: 'status_Ar',
      key: 'status_Ar',
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastDate',
      key: 'lastDate',
    },
  ];

  return (
    <div>
      <Space style={{ marginTop:10, marginBottom: 16 }}>
      <Search
        placeholder="Search by Applicant Name, Status, or Student ID"
        onSearch={handleSearch}
        enterButton
        allowClear
      />

      </Space>
      <Table
        columns={columns}
        dataSource={filteredData}
        loading={loading}
        rowKey="applicationNO"
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default ApplicationsTable;
