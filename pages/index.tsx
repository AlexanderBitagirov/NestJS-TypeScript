import type { NextPage } from 'next';
import { Button, Htag, Ptag } from '../components';


const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance='ghost' arrow='down'> Button 1</Button>
      <Button appearance='primary' arrow='right'> Button 2</Button>
      <Ptag size='s'>Small</Ptag>
      <Ptag size='m'>Medium</Ptag>
      <Ptag size='l'>Large</Ptag>
    </>
  );
};

export default Home;
