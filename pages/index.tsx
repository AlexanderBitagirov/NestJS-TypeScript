import type { NextPage } from 'next';
import { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import axios from "axios";
import { MenuItem } from '../interfaces/menu.interface';

function Home({menu}:HomeProps):JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
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
      <ul>
        {menu.map(el => (<li>{el._id.secondCategory}</li>))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}