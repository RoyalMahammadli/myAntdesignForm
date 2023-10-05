import React, { useState } from 'react'
import './Forum.css'
import {
    DatePicker,
    Form,
    Input,
    Button,
    Select,
    Checkbox,
    Upload,

} from 'antd';



const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 14,
        },
    },
};

function Forum() {
    const [submitted, setSubmitted] = useState(false)
    const addFeedback = () => {
        setSubmitted(submitted == true)
    }
    return (
        <div className="myForm">


            <Form onSubmit={(e)=>e.preventDefault()} autoComplete='off'
            
                {...formItemLayout}
                onFinish={(myFormData) => {
                    console.log({ myFormData });
                }}
                onFinishFailed={(error) => {
                    console.log({ error });
                }}
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item
                    name='First name'
                    label="First name"
                    help="Should be combination of numbers & alphabets"
                    hasFeedback
                    rules={[
                        { required: true }, { whitespace: true }
                    ]}
                >
                    <Input placeholder='Type your name' />
                </Form.Item>
                <Form.Item

                    name='Last name'
                    label="Last name"
                    help="Should be combination of numbers & alphabets"
                    rules={[
                        { required: true }, { whitespace: true }
                    ]}
                    className={(submitted) ? 'hasFeedback' : null}
                >
                    <Input placeholder='Type your last name' />
                </Form.Item>
                <Form.Item
                    name='Username'
                    label="Username"
                    help="Should be combination of numbers & alphabets"
                    rules={[
                        { required: true }, { whitespace: true }
                    ]}
                >
                    <Input placeholder='Type your username' />
                </Form.Item>
                <Form.Item
                    name='Email'
                    label="Email"
                    help="Enter your email adress"
                    rules={[
                        { required: true }, { whitespace: true }, { type: 'email' }
                    ]}
                >
                    <Input placeholder='Type your email' />
                </Form.Item>
                <Form.Item
                    name='Password'
                    label="Password"
                    help="At least 1 uppercase alphabet"
                    rules={[
                        { required: true }, { whitespace: true }, { min: 7 }
                    ]}
                >
                    <Input.Password placeholder='Type your password' />
                </Form.Item>
                <Form.Item
                    name='Gender'
                    label="Gender"
                    help="Choose your gender"
                    rules={[
                        { required: true }, { whitespace: true }
                    ]}

                >
                    <Select placeholder='Select your gender'>
                        <Select.Option value='male'>Male</Select.Option>
                        <Select.Option value='female'>Female</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='Date'
                    label="Date"
                    help="Should be pick your date"
                    rules={[
                        { required: true }
                    ]}
                >
                    <DatePicker picker='date' placeholder='Choose your date' />
                </Form.Item>

                <Form.Item
                    label="Upload"
                    help="Should be upload something"

                >
                    <Upload.Dragger multiple listType='picture' accept='.png,.jpeg,.doc' action={'http://localhost:5173/'}>
                        Drag or upload
                    </Upload.Dragger>
                </Form.Item>
                <Form.Item
                    name='Note'
                    label="Note"
                    help="Enter your notes"
                >
                    <Input placeholder='What are you thinking' />
                </Form.Item>
                <Form.Item
                    name='Terms,Privacy Policy and Cookies Policy'
                    label="Our Agreement"
                    valuePropName='checked'
                    rules={[
                        {
                            validator: (_, value) =>
                                value
                                    ? Promise.resolve() : Promise.reject("You have to accept our Terms,Privacy Policy and Cookies Policy")


                        }
                    ]}
                >
                    <Checkbox>
                        {''}
                        By submiting, you agree to our   <a target='_blank' href="https://www.iubenda.com/en/help/2859-terms-and-conditions-when-are-they-needed#:~:text=%E2%80%9CTerms%20and%20Conditions%E2%80%9D%20is%20the,%E2%80%9D%20or%20%E2%80%9CLegal%20Notes%E2%80%9D.">Terms , Privacy Policy and Cookies Policy</a>
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button  type='primary' htmlType='submit' onClick={addFeedback}>
                        Submit
                    </Button>
                </Form.Item>


            </Form>
        </div>
    )
}

export default Forum

