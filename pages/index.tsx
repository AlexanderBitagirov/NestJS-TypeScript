import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { Layout } from '../layout/Layout';


const Home: NextPage = () => {
  const [rating, setRating] = useState<number>(4);

  return (
    <Layout>
      <Htag tag="h1">Text</Htag>
      <Button appearance='ghost' arrow='down'> Button 1</Button>
      <Button appearance='primary' arrow='right'> Button 2</Button>
      <Ptag size='s'>Small</Ptag>
      <Ptag size='m'>Medium</Ptag>
      <Ptag size='l'>Large</Ptag>
      <Tag size='s' color='red'>Small red</Tag>
      <Tag size='m' color='green'>Medium grey</Tag>
      <Tag size='m' color='grey'>Medium grey</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </Layout>
  );
};

export default Home;
