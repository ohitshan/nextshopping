import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Axios from 'axios'
import Item from '../../src/component/Item'
import { Loader } from 'semantic-ui-react'
import Head from 'next/head'

const Post = ({ item,name }) => {
  // const router = useRouter()
  // const { id } = router.query

  // const [item, setItem] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);


  // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;


  // function getData() {
  //   Axios.get(API_URL).then((response) => {
  //     console.log(response.data)
  //     setItem(response.data)
  //     setIsLoading(false)
  //   })
  // };

  // useEffect(() => {
  //   if (id && id > 0) {
  //     getData()
  //   }
  // }, [id])

  return (
    <>
      {/* {isLoading ? (
        <div style={{ padding: "300px 0 " }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      ) : ( */}
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name}환경 입니다.
          <Item item={item} />
        </>
      )}
      {/* )} */}
    </>
  )
}

export default Post

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;
  return {
    props: {
      item: data,
      name:process.env.name
    },
  };
}
