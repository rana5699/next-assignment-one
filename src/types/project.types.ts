export type TProject = {
    _id:string;
  title: string;
  image: string;
  liveLink?: string;
  description: string;
  author: {
    name: string;
    email: string;
    profileUrl?: string;
  };
  technologies: string[];
  githubRepo?: string;
  featured: boolean;
  createdAt:string,
  updatedAt:string,
   __v:number
};

export type TProjectResponse= {
  statusCode: number;
  success: boolean;
  message: string;
  data: TProject;
}

