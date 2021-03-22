import { Typography } from 'antd'

const { Title, Paragraph } = Typography

export default function PublicPage() {
  return (
    <div style={{
      padding: 20
    }}>
      <Title>公开页面</Title>
      <Paragraph>
        这个页面不需要鉴权等，即可登陆。
      </Paragraph>
    </div>
  )
}