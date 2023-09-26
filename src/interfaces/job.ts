export default interface Job {
  id: number;
  attributes: {
     title: string;
     description: string;
     createdAt: string;
     updatedAt: string;
     publishedAt: string;
   };
}