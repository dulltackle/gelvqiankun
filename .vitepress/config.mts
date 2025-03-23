import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "格律乾坤医学",
  description: "格律乾坤医学数据库",
  base: "/gelvqiankun/",
  sitemap: {
    hostname: 'https://dulltackle.github.io/gelvqiankun/'
  },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: 'introduction/brief' }
    ],

    sidebar: [
      {
        text: '概论',
        items: [
          { text: '简介', link: '/introduction/brief' },
          { text: '整体思路', link: '/introduction/overall-approach' },
          { text: '接诊流程', link: '/introduction/patient-reception-process' },
          { text: '注意事项', link: '/introduction/precautions' },
        ]
      },
      {
        text: '操作规范',
        items: [
          { text: '治疗点位一览', link: '/operation-standards/treatment-point-overview' },
          { text: '减压操作规范', link: '/operation-standards/decompression-operation-standards' },
          { text: '骨盆复位操作规范', link: '/operation-standards/pelvic-reduction-operation-standards' },
        ]
      },
      {
        text: '脊柱神经理论',
        items: [
          { text: '骨内压', link: '/spinal-nerve-theory/intraosseous-pressure' },
          { text: '脊柱-神经系统功能理论', link: '/spinal-nerve-theory/spinal-nervous-system-function-theory' },
          { text: '针刺减压术理论', link: '/spinal-nerve-theory/acupuncture-decompression-theory' },
          { text: '脊柱节段与交感神经', link: '/spinal-nerve-theory/spinal-segment-and-sympathetic-nerve' },
        ]
      },
      {
        text: '人体框架理论',
        items: [
          { text: '沃尔夫定律', link: '/human-frame-theory/wolffs-law' },
          { text: '补充定律', link: '/human-frame-theory/complementary-law' },
          { text: '人体框架组成的关键：骨盆、脊柱和骶髂关节', link: '/human-frame-theory/pelvis-spine-sacroiliac-joint' },
          { text: '失衡压迫理论', link: '/human-frame-theory/imbalance-compression-theory' },
          { text: '人体框架失衡：骨盆倾斜、脊柱侧弯与骶髂关节', link: '/human-frame-theory/pelvic-tilt-spinal-curvature-sacroiliac-joint' },
          { text: '牵引复位术理论', link: '/human-frame-theory/traction-reduction-theory' },
        ]
      },
      {
        text: '疾病治疗',
        items: [
          { text: '对症选点', link: '/disease-treatment/symptom-specific-point-selection' },
          { text: '病症疗程', link: '/disease-treatment/disease-treatment-course' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: '结合三氧', link: '/others/combined-with-ozone' },
        ]
      }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

  }
})
