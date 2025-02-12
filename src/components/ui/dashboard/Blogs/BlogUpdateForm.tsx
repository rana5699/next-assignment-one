"use client";
import { createProject } from "@/actions/createProject";
import {
  Input,
  Button,
  Switch,
  Select,
  Form,
  message,
  Divider,
  Typography,
} from "antd";

const { TextArea } = Input;
const { Option } = Select;

const BlogUpdateForm = ({ blogId }: { blogId: string | null}) => {
  const [form] = Form.useForm();

//   useEffect(() => {
//     if (product?.data) {
//       form.setFieldsValue({
//         name: product.data.name,
//         brand: product.data.brand,
//         price: product.data.price,
//         type: product.data.type,
//         imageUrl: product.data.imageUrl,
//         description: product.data.description,
//         quantity: product.data.quantity,
//         rating: product.data.rating,
//       });
//     }
//   }, [product, form]);

 


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
      <div className="text-center ">
        <Typography.Title
          className="text-center font-montserrat"
          type="secondary"
          level={2}
        >
           Blog Update here...
        </Typography.Title>
        <p>{blogId}</p>
      </div>

      <Divider />

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

export default BlogUpdateForm;
