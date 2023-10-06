import React from 'react'
import { useForm } from 'react-hook-form'
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
    const form = useForm()
    const { register, formState } = form;
    const { errors } = formState;

    return (
        <div className="myForm">


            <Form autoComplete='off'
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
                    name='Firstname'
                    label="First name"
                    // help="Should be combination of numbers & alphabets"
                    hasFeedback
                    rules={[
                        { required: true }, { whitespace: true }
                    ]}
                >
                    <Input id='firstName' {...register('firstname')} placeholder='Type your name' />
                    <span className='err'>{errors.firstName?.message}</span>
                </Form.Item>
                <Form.Item

                    name='Last name'
                    label="Last name"
                    // help="Should be combination of numbers & alphabets"
                    rules={[
                        { required: true }, { whitespace: true }
                    ]}

                >
                    <Input id='lastName' {...register('lastName')} placeholder='Type your last name' />
                    <span className='err'>{errors.lastName?.message}</span>
                </Form.Item>
                <Form.Item
                    name='Username'
                    label="Username"
                    help="Should be combination of numbers & alphabets"
                    rules={[
                        { required: true }, { whitespace: true }, { message: 'its false' }
                    ]}
                >
                    <Input id='userName' {...register('userName')} placeholder='Type your username' />  <span className='err'>{errors.userName?.message}</span>
                </Form.Item>
                <Form.Item
                    name='Email'
                    label="Email"
                    help="Enter your email adress"
                    rules={[
                        { required: true }, { whitespace: true }, { type: 'email' }
                    ]}
                >
                    <Input id='email' placeholder='Type your email' /><span className='err'>{errors.email?.message}</span>
                </Form.Item>
                <Form.Item
                    name='Password'
                    label="Password"
                    help="At least 1 uppercase alphabet"
                    rules={[
                        { required: true }, { whitespace: true }, { min: 7 }
                    ]}
                >
                    <Input.Password id='password' placeholder='Type your password' /><span className='err'>{errors.password?.message}</span>
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
                    <Button type='primary' htmlType='submit'>
                        Submit
                    </Button>
                </Form.Item>


            </Form>
        </div>
    )
}

export default Forum

