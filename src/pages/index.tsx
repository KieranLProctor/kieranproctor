import type { NextPage } from 'next';

import Meta from '@/components/Meta';
import Main from '@/layouts/Main';

interface Props {}

const Index: NextPage<Props> = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
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
        </section>
      </div>
    </Main>
  );
};

export default Index;
