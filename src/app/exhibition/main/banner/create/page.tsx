import EditPage from '@/component/Exhibition/main/banner/EditPage';
import { DefaultLayout } from '@/pageLayout';

const Home = () => {
  return (
    <DefaultLayout>
      <EditPage type="create" />
    </DefaultLayout>
  );
};

export default Home;
