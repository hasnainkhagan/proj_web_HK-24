import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
        
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export default async function ProjectsPage() {
  const data: ProjectsCard[] = await getData();
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto mb-6">
      <h1 className="sevFont text-4xl lg:text-6xl pt-5">Projects</h1>
      <p className="title leading-7 text-muted-foreground lg:mt-2 sm:mt-1 tracking-[-.1em] uppercase lg:text-2xl sm:text-xl">
        glimpse of some featured{" "}
        <span className="sevFont capitalize tracking-normal">Projects</span>{" "}
        that I&apos;ve done !
      </p>
      <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {data.map((item) => (
          <a
            href={item.link}
            key={item._id}
            className="group block"
            target="_blank"
          >
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-[2em] bg-gray-100 border-2 border-primary/20">
              <Image
                src={item.imageUrl}
                alt="Project Cover Image"
                fill
                className="img object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="mt-4">
              <h2 className="projGAP font-semibold tracking-[-.05em] text-2xl hover:tracking-normal hover:uppercase hover:font-bold transition">
                {item.title}
              </h2>
              <p className="projGAP mt-1 text-muted-foreground line-clamp-3 tracking-[-.1em] uppercase">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tagItem, index) => (
                  <span
                    className="projGAP inline-flex items-center rounded-xl bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium tracking-[-.1em] text-primary ring-2 ring-inset ring-primary/20"
                    key={index}
                  >
                    {tagItem}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
