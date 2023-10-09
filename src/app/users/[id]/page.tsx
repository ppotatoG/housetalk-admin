import Detail from '@/component/Users/Detail';
import { DefaultLayout } from '@/pageLayout';

type PageParams = {
  slug: string;
};

const Home = ({ params }: { params: PageParams }) => {
  return (
    <DefaultLayout>
      <Detail params={params} />
    </DefaultLayout>
  );
};

export default Home;
