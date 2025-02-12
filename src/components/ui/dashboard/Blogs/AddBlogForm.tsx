
"use client";

import { createBlog } from "@/actions/createBlog";
import { Input, Button, Switch, Select, Form, message } from "antd";
import TextArea from "antd/es/input/TextArea";


// TCategory type definition
export type TCategory = "Tech" | "Lifestyle" | "Health" | "Business" | "Science";

const { Option } = Select;

const AddBlogForm = () => {
  const [form] = Form.useForm();

  const onFinish = async (data: FormData) => {
    const blogData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        blogData.append(key, JSON.stringify(value));  // Ensure array is serialized
      } else {
        blogData.append(key, value);  // Append single values
      }
    });

    console.log(blogData)

    try {
      const savedBlogData = await createBlog(blogData);
      message.success("Blog added successfully!");
      console.log("Blog Data:", savedBlogData);
    } catch (error) {
      message.error("Failed to add blog.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 p-6 bg-blue-600 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-semibold text-white">Add a New Blog</h1>
      </div>

      <Form
        form={form} 
        onFinish={onFinish} 
        layout="vertical"  
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <Form.Item
            name="title"
            label="Blog Title"
            rules={[{ required: true, message: "Title is required" }]}
            className="w-full sm:w-1/2"
          >
            <Input placeholder="e.g. My New Blog Post" />
          </Form.Item>

          <Form.Item
            name="imageUrl"
            label="Image URL"
            rules={[{ required: true, message: "Image URL is required" }]}
            className="w-full sm:w-1/2"
          >
            <Input placeholder="https://example.com/image.jpg" />
          </Form.Item>
        </div>

        <Form.Item
          name="content"
          label="Blog Content"
          rules={[{ required: true, message: "Blog content is required" }]}
        >
          <TextArea rows={6} placeholder="Write your blog content here..." />
        </Form.Item>

        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Category is required" }]}
        >
          <Select placeholder="Select a category">
            <Option value="Tech">Tech</Option>
            <Option value="Lifestyle">Lifestyle</Option>
            <Option value="Health">Health</Option>
            <Option value="Business">Business</Option>
            <Option value="Science">Science</Option>
          </Select>
        </Form.Item>

        <Form.Item name="isPublished" valuePropName="checked">
          <div className="flex items-center space-x-2">
            <label htmlFor="isPublished" className="text-sm text-gray-700">Published</label>
            <Switch
              onChange={(checked) => form.setFieldsValue({ isPublished: checked })}
              id="isPublished"
            />
          </div>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Add Blog
        </Button>
      </Form>
    </div>
  );
};

export default AddBlogForm;
