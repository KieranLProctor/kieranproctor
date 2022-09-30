import type { NextPage } from 'next';

import Meta from '@/components/Meta';
import Main from '@/layouts/Main';
import { AppConfig } from '@/utils/AppConfig';

interface Props {}

const Index: NextPage<Props> = () => {
  return (
    <Main
      meta={
        <Meta
          title={`Welcome | ${AppConfig.site_name}`}
          description={AppConfig.description}
        />
      }
    >
      <div className="mx-auto mb-12 max-w-site px-6 desktop:px-16">
        <section id="about" className="mt-10">
          <h1 className="text-5xl font-bold">Welcome 🦘</h1>
          <p className="mt-4 text-lg">
            I&apos;m Kieran Proctor, a Software Developer living in
            Hertfordshire, UK. I&apos;m usually developing wesbites using{' '}
            <a href="https://nextjs.org/">Next.js</a> or <a href="">Vue.js</a>{' '}
            &amp; <a href="https://laravel.com/">Laravel</a>. Although I have a
            deep interest with backend development, using things such as{' '}
            <a href="https://www.rust-lang.org/">Rust</a>,{' '}
            <a href="https://cplusplus.com/">C++</a> or{' '}
            <a href="https://nodejs.org/en/">Node.js</a>.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-3xl font-medium">Languages &amp; Tech</h2>
          <p className="mt-4 text-lg">
            These are the languages / technologies that I am proficient or
            interested in :).
          </p>
          <ol className="mt-2 ml-8 list-disc">
            <li>
              <a href="https://nextjs.org/">Next.js</a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">C#</a>
            </li>
            <li>
              <a href="https://laravel.com/">Laravel</a>
            </li>
            <li>
              <a href="https://tailwindcss.com/">Tailwind CSS</a>
            </li>
            <li>
              <a href="https://www.rust-lang.org/">Rust</a>
            </li>
            <li>
              <a href="https://cplusplus.com/">C++</a>
            </li>
          </ol>
        </section>

        <section id="projects" className="mt-14">
          <h3 className="text-3xl font-medium">Projects</h3>
          <p className="mt-4 text-lg">
            Below is a list of my current top projects, click to find out more.
            To see all click{' '}
            <a href="https://github.com/KieranLProctor?tab=repositories">
              here
            </a>
            .
          </p>
        </section>

        <section id="blog" className="mt-14">
          <h3 className="text-3xl font-medium">Blog</h3>
          <p className="mt-4 text-lg">
            This section may come soon, it may also not.. ¯\_(ツ)_/¯
          </p>
        </section>
      </div>
    </Main>
  );
};

export default Index;
