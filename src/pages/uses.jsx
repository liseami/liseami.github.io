import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="介绍一些我使用的东西"
        intro="我的脚手架，“技术日用品”，不限于硬件，软件和框架."
      >
        <div className="space-y-20">
          <ToolsSection title="硬件">
            <Tool title="14” MacBook Pro, M1 Max, 64GB RAM (2021)">
              64GB内存，做任何开发，剪任何片子，都很难听到风扇响。除非剪辑导出+多开模拟器。
            </Tool>
          </ToolsSection>
          <ToolsSection title="设计工具">
            <Tool title="Figma">

            </Tool>
          </ToolsSection>
          <ToolsSection title="日用">
              <Tool title="Notion">
              </Tool>
            </ToolsSection>
          <ToolsSection title="框架">
            <Tool title="FastApi">
              https://fastapi.tiangolo.com/
            </Tool>
            <Tool title="Next.js">
              完全可用于生产的React.js框架。
              https://nextjs.org/
            </Tool>
            <Tool title="SwiftUI">
              苹果跨平台UI框架。https://developer.apple.com/xcode/swiftui/
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
