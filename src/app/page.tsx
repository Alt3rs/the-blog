import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function HomePage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: '/post/asdfasdf',
          }}
          imageProps={{
            width: 1200,
            height: 720,
            src: '/images/mibr.png',
            alt: 'Logo MIBR',
            priority: true,
          }}
        />
        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2025-05-19'
          >
            19/05/2025 17:25
          </time>
          <PostHeading as='h1' url='#'>
            MIBR in the EWC
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            veniam, modi perferendis, ex praesentium id numquam sit aut optio,
            ad distinctio autem quasi mollitia. Quo ducimus fugit tempore in
            omnis!
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>
      <footer>
        <p className='text-6xl font-bold text-center py-8'>Aqui é o footer</p>
      </footer>
    </Container>
  );
}
