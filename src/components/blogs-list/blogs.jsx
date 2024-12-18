import React from 'react'
import Image from '../utils/image'
import Button from '../utils/button'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import Card from 'antd/es/card/Card'
import HTMLReactParser from 'html-react-parser/lib/index'
import envConfig from '../../environmentConfig'
import { useSelector } from 'react-redux'

const Blog = (props) => {
  const loginUser = useSelector((store) => store.authState.userData);
  // imagesrc = envConfig.bucketImageBaseUrl
  return (
    // <Card>
    //   <h3>{props.title}</h3>
    //   <Image {...{ src: props.img, alt: "...", style: { width: 300, height: 300 } }} />
    //   <p>{props.description}</p>
    //   <Button {...{ style: { width: 60, height: 35 } }}>
    //     {<EditOutlined />}
    //   </Button>
    //   <Button  {...{ style: { width: 60, height: 35, color: 'red' } }}>
    //     {<DeleteOutlined />}
    //   </Button>
    // </Card>
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<Image {...{ src: envConfig.bucketImageBaseUrl.replace("imageId", props.featuredImage), alt: "...", style: { width: 300, height: 300 } }} />}
      key={props.featuredImage}
    >
      <h4>{props.title}</h4>
      <p>{HTMLReactParser(props.content)}</p>
      {loginUser?.$id === props.userId && <><Button {...{ style: { width: 60, height: 35 } }}>
        {<EditOutlined />}
      </Button>
        <Button  {...{ style: { width: 60, height: 35, color: 'red' } }}>
          {<DeleteOutlined />}
        </Button></>}
      {/* <Meta title={props.title} description="www.instagram.com" /> */}
    </Card>

  )
}

export default Blog