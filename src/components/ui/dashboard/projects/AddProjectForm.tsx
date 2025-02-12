"use client";
import { createProject } from "@/actions/createProject"; 
import { Input, Button, Switch, Select, Form, message } from "antd";

const { TextArea } = Input;
const { Option } = Select;

const AddProjectForm = () => {
  const [form] = Form.useForm(); 

  const onFinish = async (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value)); 
      } else {
        formData.append(key, value); 
      }
    });

    try {
      const projectData = await createProject(formData);
      message.success("Project added successfully!");
      console.log("Project Data: ", projectData);
    } catch (error) {
      message.error("Failed to add project.");
      console.error("Error: ", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6 p-6 bg-blue-600 rounded-lg shadow-lg">
        <h1 className="text-center text-3xl font-semibold text-white">
          Add a New Project
        </h1>
      </div>

      <Form
        form={form} // Attach the form hook to manage form state
        onFinish={onFinish} // Handle form submission
        layout="vertical" // Make sure fields are vertically aligned
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <Form.Item
            name="title"
            label="Project Title"
            rules={[{ required: true, message: "Title is required" }]}
            className="w-full sm:w-1/2"
          >
            <Input placeholder="e.g. Portfolio Website" />
          </Form.Item>

          <Form.Item
            name="image"
            label="Project Image URL"
            rules={[{ required: true, message: "Image URL is required" }]}
            className="w-full sm:w-1/2"
          >
            <Input placeholder="https://example.com/image.jpg" />
          </Form.Item>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <Form.Item
            name="projectUrl"
            label="Live Project URL"
            rules={[{ required: true, message: "Project URL is required" }]}
            className="w-full sm:w-1/2"
          >
            <Input placeholder="https://example.com" />
          </Form.Item>

          <Form.Item
            name="githubUrl"
            label="GitHub Repository"
            rules={[{ required: true, message: "GitHub URL is required" }]}
            className="w-full sm:w-1/2"
          >
            <Input placeholder="https://github.com/username/portfolio" />
          </Form.Item>
        </div>

        <Form.Item
          name="description"
          label="Project Description"
          rules={[{ required: true, message: "Project Description is required" }]}
        >
          <TextArea rows={4} placeholder="Describe your project..." />
        </Form.Item>

        <Form.Item
          name="technologies"
          label="Technologies Used"
          rules={[{ required: true, message: "Please select at least one technology" }]}
        >
          <Select mode="multiple" placeholder="Select technologies" allowClear>
            <Option value="Next.js">Next.js</Option>
            <Option value="TypeScript">TypeScript</Option>
            <Option value="Tailwind CSS">Tailwind CSS</Option>
            <Option value="MongoDB">MongoDB</Option>
            <Option value="JWT">JWT</Option>
            <Option value="Node.js">Node.js</Option>
          </Select>
        </Form.Item>

        <Form.Item name="featured">
          <div className="flex items-center space-x-2">
            <label htmlFor="featured" className="text-sm text-gray-700">
              Featured
            </label>
            <Switch
              onChange={(checked) => form.setFieldsValue({ featured: checked })}
              id="featured"
            />
          </div>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Add Project
        </Button>
      </Form>
    </div>
  );
};

export default AddProjectForm;
