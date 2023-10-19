import InvalidLayout from './pageLayout/InvalidLayout';
const NotFound = () => {
  return <InvalidLayout message="404 not found" useHeader={false} />;
};

export default NotFound;
