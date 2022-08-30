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
      <div className="mx-auto mb-6 max-w-site px-6 desktop:px-16">
        <section className="mt-4">
          <h1 className="text-5xl font-bold">Welcome 🦘</h1>
          <p className="mt-4 max-w-[75%] text-lg">
            I&apos;m Kieran Proctor, a Software Developer from the North West of
            the UK. Most of my projessional experience is within Web Development
            although I have developed some internal applications at previous
            companies.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-medium">Languages &amp; Tech</h2>
          <p className="mt-4 max-w-[75%] text-lg">
            These are all of the languages / technologies that I am somewhat
            proficient in :).
          </p>
          <ol className="mt-2">
            <li>Next.js</li>
            <li>C#</li>
            <li>Laravel</li>
            <li>Tailwind CSS</li>
          </ol>
        </section>

        <section className="mt-10">
          <h3 className="text-3xl font-medium">Projects</h3>
          <p className="mt-4 max-w-[75%] text-lg">
            Below is a list of my current top projects, click on a card to find
            out more.
          </p>
        </section>
      </div>
    </Main>
  );
};

export default Index;
