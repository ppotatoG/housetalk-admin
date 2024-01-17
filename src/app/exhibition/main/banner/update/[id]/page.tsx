import DetailGuard from '@/component/Exhibition/DetailGuard';
import { DefaultLayout } from '@/pageLayout';

type PageParams = {
  slug: string;
};

const Home = ({ params }: { params: PageParams }) => {
  return (
    <DefaultLayout>
      <DetailGuard params={params} />
    </DefaultLayout>
  );
};

export default Home;
export async function generateStaticParams() {
  return [{ id: 'fallback' }];
}
