import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import Style from './ItemList.module.css'
import Link from 'next/link'

function ItemLIst({ list }) {
  return (
    <div>
      <Grid columns={3} divided>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href={`/detail/${item.id}`}>
                <a>
                  <div className={Style.wrap}>
                    <Image src={item.image_link}
                      alt={item.name}
                      className={Style.img_item}
                    />
                    <strong className={Style.tit_item}>{item.name}</strong>
                    <span className={Style.txt_info}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={Style.num_price}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default ItemLIst