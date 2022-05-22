import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import ItemLIst from '../src/component/ItemLIst';
import { Divider, Header, Loader } from 'semantic-ui-react';

export default function Home({ list }) {

  // const [List, setList] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   getData()
  // })


  // const API_URL = process.env.NEXT_PUBLIC_API_URL;
  // "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  // function getData() {
  //   Axios.get(API_URL)
  //     .then(res => {
  //       console.log(res)
  //       setList(res.data);
  //       setIsLoading(false)
  //     })
  // }
  return (
    <div>
      <Head>
        <title>HOME | 연습페이지</title>
        <meta name='description' content='홈입니다'></meta>
      </Head>
      {/* {isLoading && (
        <div style={{ padding: "300px 0 " }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )} */}
      {/* {!isLoading && ( */}
      <>
        <Header as="h3" style={{ paddingTop: 40 }}>
          베스트 상품
        </Header>
        <Divider />
        <ItemLIst list={list.slice(0, 9)} />
        <Header as="h3" style={{ paddingTop: 40 }}>
          신상품
        </Header>
        <Divider />
        <ItemLIst list={list.slice(9)} />
      </>
      {/* )} */}
    </div>
  )
}


export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      list: data,
      name: process.env.name
    },
  };
}