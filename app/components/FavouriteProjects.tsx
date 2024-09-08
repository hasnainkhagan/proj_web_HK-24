import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";
import Marquee from "react-fast-marquee";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) [0...2] {
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

export async function FavoriteProjects() {
  const data: ProjectsCard[] = await getData();

  console.log(data);
  return (
    <>
      <div className="pt-10">
        <Marquee className="GAP w-full bg-[#131313] text-[#dedede] text-[3em] rounded-[.5em] uppercase tracking-[-.1em]">
          <span className="ml-4">featured</span>
          <span className="marqueeTXT mx-5">projects</span> --- featured
          <span className="marqueeTXT mx-5">projects</span> --- featured
          <span className="marqueeTXT mx-5">projects</span> --- featured
          <span className="marqueeTXT mx-5">projects</span> ---
        </Marquee>
      </div>
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
    </>
  );
}
