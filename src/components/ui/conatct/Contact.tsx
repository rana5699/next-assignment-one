"use client";
import  Form  from "next/form";
import { Input, Button} from "antd";
import { sendMessage } from "@/actions/sendMessage";

const { TextArea } = Input;

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full md:w-10/12 lg:max-w-4xl mx-auto p-6  shadow-md rounded-lg">
        <h1 className="text-center text-2xl font-semibold mb-6">Contact Us</h1>
        
        <Form 
          action={sendMessage} 
          className="space-y-4"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium ">Name</label>
            <Input name="name" id="name" placeholder="Your Name" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium ">Email</label>
            <Input name="email" id="email" type="email" placeholder="Your Email" required />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium ">Message</label>
            <TextArea name="message" id="message" rows={4} placeholder="Your message here..." required />
          </div>

          <div>
            <Button type="primary" htmlType="submit" block>
              Send Message
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
