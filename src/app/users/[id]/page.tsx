import Detail from '@/component/Users/Detail';

type PageParams = {
  slug: string;
};

const Home = ({ params }: { params: PageParams }) => {
  return (
    <main>
      <Detail params={params} />
    </main>
  );
};

export default Home;
