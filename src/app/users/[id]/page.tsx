import DetailGuard from '@/component/Users/DetailGuard';
import { DefaultLayout } from '@/pageLayout';

type PageParams = {
  params: { id: string };
};

const Home = ({ params }: PageParams) => {
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
