export type TCategory = "Tech" | "Lifestyle" | "Health" | "Business" | "Science";

export type TBlog = {
  _id:string
  title: string;
  content: string;
  imageUrl: string;
  category: TCategory;
  author?: {
    name: string;
    profileUrl?: string;
  };
  isPublished: boolean;
  createdAt:string,
  updatedAt:string,
   __v:number
};


export type TBlogResponse= {
  statusCode: number;
  success: boolean;
  message: string;
  data: TBlog;
}
