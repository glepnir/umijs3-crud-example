import React, { useState, useEffect } from 'react';
import { Table, Input, Button, Modal, Form } from 'antd';
import { ColumnType } from 'antd/es/table';
import { ICourseData, ICourseResponse } from '@/interfaces/course';
import fetchCourseList from '@/services/courseApi';

const { Search } = Input;
const FormItem = Form.Item;

const Course: React.FC = () => {
  const [datas, setDatas] = useState<ICourseData[]>([] as ICourseData[]);
  const [keywords, setKeywords] = useState('');
  const [visible, setVisible] = useState(false);

  const getDatas = async (keywords: string) => {
    const res = (await fetchCourseList(keywords)) as ICourseResponse;
    if (res) {
      setDatas(res.datas);
    }
  };

  useEffect(() => {
    getDatas(keywords);
  }, [keywords]);

  const columns: ColumnType<ICourseData>[] = [
    {
      title: '课程类别',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '课程总价',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: '课程数量',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: '课程地址',
      dataIndex: 'address',
      key: 'address',
      render: (text: string) => (
        <>
          <a target="blank" href={text}>
            查看课程
          </a>
        </>
      ),
    },
    {
      title: '课程操作',
      dataIndex: 'action',
      key: 'action',
      render: () => (
        <>
          <a>编辑</a>
          <a>删除</a>
        </>
      ),
    },
  ];

  const handleSearch = (search_keywords: string) => {
    setKeywords(search_keywords);
  };

  return (
    <div>
      <Search
        placeholder="请输入搜索的课程"
        onSearch={handleSearch}
        enterButton="搜索"
        size="large"
        style={{ width: 400, margin: 10 }}
      />
      <Button
        type="primary"
        style={{ margin: 10 }}
        size="large"
        onClick={() => setVisible(true)}
      >
        添加课程
      </Button>
      <Modal
        title="添加课程"
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okText="确认"
        cancelText="取消"
      >
        <Form>
          <FormItem
            label="课程类别"
            name="CourseType"
            rules={[
              {
                required: true,
                message: '请输入课程类别!',
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="课程名称"
            name="CourseName"
            rules={[
              {
                required: true,
                message: '请输入课程名称!',
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="课程总价"
            name="CourseTotalPrice"
            rules={[
              {
                required: true,
                message: '请输入课程总价!',
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            label="课程数量"
            name="CourseTotal"
            rules={[
              {
                required: true,
                message: '请输入课程数量!',
              },
            ]}
          >
            <Input />
          </FormItem>
        </Form>
      </Modal>

      <Table
        columns={columns}
        dataSource={datas}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default Course;
