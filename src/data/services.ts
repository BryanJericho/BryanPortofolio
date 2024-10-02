import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: `1`,
    title: "Web Development",
    icons: [
      "/skills/redux.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/html.svg",
      "/skills/css.svg",
    ],
    shortDescription: "I build visually stunning and user-friendly websites.",
    description:
      "I deliver stunning, user-friendly websites to establish your online presence. From simple sites to complex e-commerce platforms, I provide tailored solutions using the latest frameworks and technologies for a seamless, responsive, and SEO-friendly browsing experience. Enhance your online identity with quality.",
  },
  {
    id: 2,
    title: "Backend Development",
    icons: [
      "/skills/socket-io.png",
      "/skills/docker.png",
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/aws.svg",
    ],
    shortDescription: "I create robust and scalable backend infrastructures.",
    description:
      "I enhance digital applications with robust, scalable backend infrastructures. I develop efficient database structures, APIs, and configure servers for optimal performance, security, and scalability, ensuring your applications handle high traffic and complex data management seamlessly. Rely on strong backend solutions.",
  },
  {
    id: 3,
    title: "Database Management",
    icons: [
      "/skills/mysql.svg",
      "/skills/postgresql.svg",
      "/skills/mongodb.svg",
      "/skills/redis.svg",
      "/skills/sqlite.svg",
    ],
    shortDescription: "I manage and optimize your database systems.",
    description:
      "I manage and optimize your database systems for performance, reliability, and scalability. With expertise in SQL and NoSQL databases, I design schemas, write complex queries, and implement best practices for data integrity and security. Ensure your data is managed effectively and efficiently.",
  },
];

export default services;
