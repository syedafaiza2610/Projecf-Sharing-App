import React from 'react';
import { Form, Input, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './App.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
const { Header} = Layout;



const AddProjectForm = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle form submission here, such as sending data to backend API
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', // You can change this to your backend API endpoint
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <>
      
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/addproject">Add Project</Link></Menu.Item>
                </Menu>
            </Header>

            <Form className='form-container '
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item className='ant-form-item'
                    label="Project Name"
                    name="projectName"
                    rules={[{ required: true, message: 'Please input your project name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item className='ant-form-item'
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input your project description!' }]}
                >
                    <Input.TextArea className='ant-form-item-control-input' />
                </Form.Item>

                <Form.Item className='ant-form-item'
                    label="Upload Image"
                    name="image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                >
                    <Upload className='upload-container' {...uploadProps}>
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </Form.Item>

                <Form.Item className='ant-form-item'> 
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        
        </>
    );

};

export default AddProjectForm;
