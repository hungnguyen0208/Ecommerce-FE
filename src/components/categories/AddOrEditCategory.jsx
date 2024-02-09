import React, { Component } from 'react';
import withRouter from '../../helpers/withRouter';
import { Button, Form, Row, Col, Input, Divider, Breadcrumb, Select } from 'antd';

class AddOrEditCategory extends Component {
    onSubmitForm = (values) => {
        console.log(values);
    }
    render() {
        return (
            <div>
                <Breadcrumb className='site-breadcrumb'>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/categories">Categories</Breadcrumb.Item>
                    <Breadcrumb.Item>Add New Category</Breadcrumb.Item>
                </Breadcrumb>

                <Divider></Divider>

                <Form layout="vertical" className="form" onFinish={this.onSubmitForm}>
                    <Row>
                        <Col md={12}>
                            <Form.Item label="Category ID" name="categoryId">
                                <Input readOnly></Input>
                            </Form.Item>
                            <Form.Item label="Name" name="name" rules={[{required: true, min: 2}]}>
                                <Input ></Input>
                            </Form.Item>
                            <Form.Item label="Status" name="status" initialValue={"0"}>
                                <Select>
                                    <Select.Option value="0">Visible</Select.Option>
                                    <Select.Option value="1">Invisible</Select.Option>
                                </Select>
                            </Form.Item>

                            <Divider></Divider>
                            <Button htmlType="submit" type="primary" style={{ float: 'right' }}>
                                Save
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default withRouter(AddOrEditCategory);
