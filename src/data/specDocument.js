const onLight = '#1D2129'
const onDark = '#FFFFFF'

function makeScale(tokens) {
  return tokens.map((item, index) => ({
    ...item,
    textColor: index >= 5 ? onDark : onLight,
  }))
}

export const specDocument = {
  brand: {
    kicker: 'UI Specification',
    name: 'Spec Atelier',
    summary: '把组件规范沉淀成可浏览、可交付、可持续维护的 UI 规范文档。',
    documentTitle: '从设计稿到 UI 规范文档',
    documentDescription:
      '当前文档页已开始按 Figma 设计稿对齐。第一步先落地色彩系统，包含品牌主色、功能色、中性色、语义色和深色模式预览。',
    highlights: [
      { label: 'Palette Groups', value: '09' },
      { label: 'Semantic Tokens', value: '12' },
      { label: 'Color Steps', value: '10x' },
    ],
  },
  overview: [
    { id: 'intro', label: '快速开始' },
    { id: 'principles', label: '设计原则' },
    { id: 'colors', label: '颜色系统' },
    { id: 'dark-mode', label: '深色模式' },
    { id: 'typography', label: '字体规范' },
    { id: 'spacing', label: '间距系统' },
    { id: 'corners', label: '圆角规范' },
    { id: 'surfaces', label: '投影规范' },
    { id: 'buttons', label: '按钮规范' },
    { id: 'tables', label: '数据表格规范' },
    { id: 'tabs', label: '标签栏规范' },
    { id: 'inputs', label: '输入框规范' },
    { id: 'dropdowns', label: '选择器规范' },
    { id: 'time-picker', label: '时间选择器规范' },
    { id: 'modals', label: '弹窗规范' },
    { id: 'switches', label: 'switch规范' },
    { id: 'cards', label: '卡片规范' },
    { id: 'empty-states', label: '空状态规范' },
    { id: 'components', label: '组件示例' },
  ],
  principles: [
    {
      title: 'Readable',
      description: '每个章节都以文档阅读为目标，避免只剩视觉展示而缺少可交付说明。',
    },
    {
      title: 'Token First',
      description: '先定义颜色、字体、间距等基础 token，再向上组织组件规范，减少重复。',
    },
    {
      title: 'Easy to Scale',
      description: '后续新增组件时直接复用当前章节结构，可以持续扩展成完整的规范站点。',
    },
  ],
  colorSystem: {
    title: '色彩系统',
    description:
      '本节依据 Figma 节点 `438:8139` 的色彩规范页整理。页面保留了品牌主色、功能色、中性色和语义色的层级关系，并把信息转换成适合前端和文档维护的展示结构。',
    brandIntro: {
      title: '品牌色能够直观地传达产品特点和设计风格',
      description:
        '建议应用场景包括：关键操作点、操作状态、重要信息高亮、图形化信息和品牌形象等设计场景。',
      tags: ['关键操作', '状态反馈', '信息高亮', '图形化', '品牌识别'],
    },
    brandPalette: {
      category: '官方定义色',
      name: 'Blue / 蓝色',
      accent: '#2176F6',
      anchor: { token: 'Blue-6', value: '#2176F6' },
      description: '设计稿中的主品牌色，页面主要交互建议围绕 Blue-6 使用。',
      scale: makeScale([
        { token: 'Blue-1', value: '#E8F5FF' },
        { token: 'Blue-2', value: '#BFE0FD' },
        { token: 'Blue-3', value: '#97C9FB' },
        { token: 'Blue-4', value: '#6FB0FA' },
        { token: 'Blue-5', value: '#4894F8' },
        { token: 'Blue-6', value: '#2176F6' },
        { token: 'Blue-7', value: '#1458CC' },
        { token: 'Blue-8', value: '#0B3DA1' },
        { token: 'Blue-9', value: '#042677' },
        { token: 'Blue-10', value: '#00144D' },
      ]),
    },
    functionalPalettes: [
      {
        category: '功能色',
        name: 'Yellow / 黄色',
        accent: '#FAC858',
        anchor: { token: 'Yellow-6', value: '#FAC858' },
        description: '适合警示、提示、风险提醒和中高优先级信息。',
        scale: makeScale([
          { token: 'Yellow-1', value: '#FFFCE8' },
          { token: 'Yellow-2', value: '#FEF5CB' },
          { token: 'Yellow-3', value: '#FDECAE' },
          { token: 'Yellow-4', value: '#FCE191' },
          { token: 'Yellow-5', value: '#FBD574' },
          { token: 'Yellow-6', value: '#FAC858' },
          { token: 'Yellow-7', value: '#CF9937' },
          { token: 'Yellow-8', value: '#A3701D' },
          { token: 'Yellow-9', value: '#784A0B' },
          { token: 'Yellow-10', value: '#4D2A00' },
        ]),
      },
      {
        category: '功能色',
        name: 'Red / 红色',
        accent: '#EE493F',
        anchor: { token: 'Red-6', value: '#EE493F' },
        description: '用于错误、危险操作和高风险状态提示。',
        scale: makeScale([
          { token: 'Red-1', value: '#FFEDE8' },
          { token: 'Red-2', value: '#FCCFC4' },
          { token: 'Red-3', value: '#F8AFA2' },
          { token: 'Red-4', value: '#F58E80' },
          { token: 'Red-5', value: '#F16B5F' },
          { token: 'Red-6', value: '#EE493F' },
          { token: 'Red-7', value: '#C62A27' },
          { token: 'Red-8', value: '#9D1517' },
          { token: 'Red-9', value: '#75080D' },
          { token: 'Red-10', value: '#4D0006' },
        ]),
      },
      {
        category: '功能色',
        name: 'Green / 绿色',
        accent: '#2BA471',
        anchor: { token: 'Green-6', value: '#2BA471' },
        description: '用于成功、完成、通过和积极反馈。',
        scale: makeScale([
          { token: 'Green-1', value: '#E8FFF2' },
          { token: 'Green-2', value: '#B9EDD0' },
          { token: 'Green-3', value: '#8EDBB3' },
          { token: 'Green-4', value: '#68C89A' },
          { token: 'Green-5', value: '#47B684' },
          { token: 'Green-6', value: '#2BA471' },
          { token: 'Green-7', value: '#1C8E62' },
          { token: 'Green-8', value: '#107854' },
          { token: 'Green-9', value: '#066245' },
          { token: 'Green-10', value: '#004D37' },
        ]),
      },
      {
        category: '功能色',
        name: 'Orange / 橙色',
        accent: '#F27549',
        anchor: { token: 'Orange-6', value: '#F27549' },
        description: '适合强调行动、特殊提醒和热度信息。',
        scale: makeScale([
          { token: 'Orange-1', value: '#FFF2E8' },
          { token: 'Orange-2', value: '#FCDCC7' },
          { token: 'Orange-3', value: '#FAC5A7' },
          { token: 'Orange-4', value: '#F7AC87' },
          { token: 'Orange-5', value: '#F59268' },
          { token: 'Orange-6', value: '#F27549' },
          { token: 'Orange-7', value: '#C9522D' },
          { token: 'Orange-8', value: '#9F3318' },
          { token: 'Orange-9', value: '#761B09' },
          { token: 'Orange-10', value: '#4D0A00' },
        ]),
      },
      {
        category: '功能色',
        name: 'Deep Blue / 深蓝',
        accent: '#3662EC',
        anchor: { token: 'Deep Blue-6', value: '#3662EC' },
        description: '适合次级品牌表达、深层链接和强化识别场景。',
        scale: makeScale([
          { token: 'Deep Blue-1', value: '#E8F2FF' },
          { token: 'Deep Blue-2', value: '#C2D8FB' },
          { token: 'Deep Blue-3', value: '#9EBDF7' },
          { token: 'Deep Blue-4', value: '#7AA1F4' },
          { token: 'Deep Blue-5', value: '#5883F0' },
          { token: 'Deep Blue-6', value: '#3662EC' },
          { token: 'Deep Blue-7', value: '#2245C4' },
          { token: 'Deep Blue-8', value: '#122B9C' },
          { token: 'Deep Blue-9', value: '#071774' },
          { token: 'Deep Blue-10', value: '#00094D' },
        ]),
      },
      {
        category: '功能色',
        name: 'Light Green / 浅绿色',
        accent: '#2BBB8A',
        anchor: { token: 'Light Green-6', value: '#2BBB8A' },
        description: '设计稿中作为另一组成功向功能色，适合轻盈、友好和可达成反馈。',
        scale: makeScale([
          { token: 'Light Green-1', value: '#E8FFF4' },
          { token: 'Light Green-2', value: '#BBF1D8' },
          { token: 'Light Green-3', value: '#91E4C0' },
          { token: 'Light Green-4', value: '#6CD6AC' },
          { token: 'Light Green-5', value: '#49C99A' },
          { token: 'Light Green-6', value: '#2BBB8A' },
          { token: 'Light Green-7', value: '#1B9F78' },
          { token: 'Light Green-8', value: '#0F8465' },
          { token: 'Light Green-9', value: '#066851' },
          { token: 'Light Green-10', value: '#004D3D' },
        ]),
      },
    ],
    neutralPalettes: [
      {
        category: '中性色',
        name: 'Grey / 中性色',
        accent: '#888888',
        anchor: { token: 'Gray-6', value: '#888888' },
        description: '偏通用的纯灰阶系统，适合基础骨架和不带品牌倾向的背景、层次。',
        scale: makeScale([
          { token: 'Gray-1', value: '#F6F6F6' },
          { token: 'Gray-2', value: '#EEEEEE' },
          { token: 'Gray-3', value: '#DDDDDD' },
          { token: 'Gray-4', value: '#CCCCCC' },
          { token: 'Gray-5', value: '#AAAAAA' },
          { token: 'Gray-6', value: '#888888' },
          { token: 'Gray-7', value: '#666666' },
          { token: 'Gray-8', value: '#444444' },
          { token: 'Gray-9', value: '#222222' },
          { token: 'Gray-10', value: '#000000' },
        ]),
      },
      {
        category: '品牌中性',
        name: 'Brand Neutral / 品牌倾向中性色',
        accent: '#8B91A1',
        anchor: { token: 'Gray-6', value: '#8B91A1' },
        description: 'Figma 中用于正文、描边、表面层级的核心中性色，明显带有品牌冷灰倾向。',
        scale: makeScale([
          { token: 'Gray-1', value: '#F5F6F8' },
          { token: 'Gray-2', value: '#EAEDF1' },
          { token: 'Gray-3', value: '#D9DDE4' },
          { token: 'Gray-4', value: '#C8CCD6' },
          { token: 'Gray-5', value: '#AAAFBC' },
          { token: 'Gray-6', value: '#8B91A1' },
          { token: 'Gray-7', value: '#6E7282' },
          { token: 'Gray-8', value: '#525563' },
          { token: 'Gray-9', value: '#373944' },
          { token: 'Gray-10', value: '#1B1C24' },
        ]),
      },
    ],
    semanticGroups: [
      {
        title: '背景色',
        description: '用于页面基础背景、色块选中态和大面积的浅层承载底色。',
        items: [
          { name: '白色', value: '#FFFFFF', usage: '页面基础背景、卡片主底色。' },
          { name: '色块选中 / 中性色', value: '#F5F6F8', usage: '选中、禁用和浅层弱背景。' },
        ],
      },
      {
        title: '文本色',
        description: '设计稿将文本色分为四层，直接映射到 T1 到 T4 的文字层级。',
        items: [
          { name: '标题 / 正文文字', value: '#373944', usage: 'T1 级文字，标题和核心正文。', invert: true },
          { name: '正文文字', value: '#6E7282', usage: 'T2 级文字，常规段落和说明。', invert: true },
          { name: '辅助文字', value: '#AAAFBC', usage: 'T3 级文字，弱化说明。', invert: false },
          { name: '占位文本', value: '#D9DDE4', usage: 'T4 级文字，占位和禁用。', invert: false },
        ],
      },
      {
        title: '边框与分割线',
        description: '可交互组件描边和分割线都采用中性色，保证层次清晰但不过度抢视觉。',
        items: [
          { name: '品牌色 / 边框', value: '#E5E8EE', usage: 'Input、Select 等可交互组件描边。' },
          { name: '分隔线（深）', value: '#EAEDF1', usage: '深一点的层级切割线。' },
          { name: '分隔线（浅）', value: '#F5F6F8', usage: '页面内更轻的模块分隔。' },
        ],
      },
      {
        title: '填充色',
        description: '浅层填充用于悬浮、禁用和深色底上的浮层表达。',
        items: [
          { name: '填充 / 禁用（浅）', value: '#F5F6F8', usage: '禁用态、浅背景底块。' },
          { name: '白底悬浮', value: '#F2F3F5', usage: '白底场景中的 hover / active 背景。' },
          { name: '深色 / 灰底悬浮', value: '#EAEDF1', usage: '较深容器中的悬浮态填充。' },
        ],
      },
    ],
  },
  darkModeSystem: {
    title: '深色模式规范',
    neutralDescription:
      '中性色主要被大量的应用在界面的文字部分，此外背景、边框、分割线等场景中也非常常见。产品中性色的定义需要考虑深色背景以及浅色背景的差异，同时结合 WCAG 2.0 标准。',
    textDescription: '用于常见文字颜色，文本色通过运用不同的中性色，来表现层次结构。',
    neutralPalette: {
      category: '中性色',
      name: 'Dark 中性色',
      accent: '#2E2F30',
      anchor: { token: 'Gray-6', value: '#909296' },
      description: '',
      scale: makeScale([
        { token: 'Dark Gray-1', value: '#1E1F21' },
        { token: 'Dark Gray-2', value: '#2E2F30' },
        { token: 'Dark Gray-3', value: '#484849' },
        { token: 'Dark Gray-4', value: '#5F6165' },
        { token: 'Dark Gray-5', value: '#777A7E' },
        { token: 'Dark Gray-6', value: '#909296' },
        { token: 'Dark Gray-7', value: '#A7A8AC' },
        { token: 'Dark Gray-8', value: '#BEC1C7' },
        { token: 'Dark Gray-9', value: '#D3D7DF' },
        { token: 'Dark Gray-10', value: '#EFF4FA' },
      ]).map((item, index) => ({
        ...item,
        textColor: index <= 5 ? onDark : onLight,
      })),
    },
    backgroundItems: [
      {
        name: '整体背景色',
        value: '#1E1F21',
        usage: '',
      },
      {
        name: '一级容器背景',
        value: '#2E2F30',
        usage: '',
      },
      {
        name: '二级容器背景',
        value: '#303133',
        usage: '',
      },
      {
        name: '三级容器背景',
        value: '#343638',
        usage: '',
      },
      {
        name: '下拉弹出框、Tooltip 背景颜色',
        value: '#373739',
        usage: '',
      },
    ],
    textItems: [
      {
        name: 'dark-color-text-1',
        value: 'rgba(255,255,255,0.9)',
        valueLabel: 'fade(#FFF, 90%)',
        usage: '标题/正文文字。对应 T1 文字类型',
        lightText: true,
      },
      {
        name: 'dark-color-text-2',
        value: 'rgba(255,255,255,0.7)',
        valueLabel: 'fade(#FFF, 70%)',
        usage: '正文文字。对应 T2 文字类型',
        lightText: true,
      },
      {
        name: 'dark-color-text-3',
        value: 'rgba(255,255,255,0.5)',
        valueLabel: 'fade(#FFF, 50%)',
        usage: '辅助文字。对应 T3 文字类型',
      },
      {
        name: 'dark-color-text-4',
        value: 'rgba(255,255,255,0.3)',
        valueLabel: 'fade(#FFF, 30%)',
        usage: '占位文字、禁用状态文字。对应 T4 文字类型',
      },
    ],
    borderItems: [
      {
        name: 'border',
        value: '#2E2F30',
        valueLabel: '#2E2F30',
        usage: '可交互组件的描边色，如 input',
      },
    ],
    dividerItems: [
      {
        name: 'divider',
        value: '#484849',
        valueLabel: '#484849',
        usage: '分隔线（深）',
      },
    ],
    fillItems: [
      {
        name: 'dark-color-fill-1',
        value: 'rgba(255,255,255,0.04)',
        valueLabel: 'fade(#FFF, 4%)',
        usage: '填充/禁用（浅）',
      },
      {
        name: 'dark-color-fill-2',
        value: 'rgba(255,255,255,0.08)',
        valueLabel: 'fade(#FFF, 8%)',
        usage: '常规/一般',
      },
      {
        name: 'dark-color-fill-3',
        value: 'rgba(255,255,255,0.12)',
        valueLabel: 'fade(#FFF, 12%)',
        usage: '深色/灰底悬浮（深）',
      },
      {
        name: 'dark-color-fill-4',
        value: 'rgba(255,255,255,0.16)',
        valueLabel: 'fade(#FFF, 16%)',
        usage: '重/特殊场景',
      },
    ],
    usageRules: [
      {
        label: 'border',
        value: '#2E2F30',
        description: '用于深色界面里可交互组件的描边，比如 Input、Select、表单控件边框。',
      },
      {
        label: 'divider',
        value: '#484849',
        description: '用于深色背景下的分割线、模块区隔线、列表项之间的结构分隔。',
      },
      {
        label: 'dark-color-fill-1',
        value: 'rgba(255,255,255,0.04)',
        description: '用于很轻的填充、禁用态、弱感知背景层。',
      },
      {
        label: 'dark-color-fill-2',
        value: 'rgba(255,255,255,0.08)',
        description: '用于常规表面层、轻 hover、普通容器填充。',
      },
      {
        label: 'dark-color-fill-3',
        value: 'rgba(255,255,255,0.12)',
        description: '用于更明确的悬浮态、深色底上的高一级表面反馈。',
      },
      {
        label: 'dark-color-fill-4',
        value: 'rgba(255,255,255,0.16)',
        description: '用于更重的特殊场景、高强调状态或更强存在感的填充层。',
      },
    ],
  },
  typographySystem: {
    title: '字体规范',
    description:
      '本节依据 Figma 节点 `440:8753` 的字体规范页整理，包含跨平台字体策略、特殊语言处理、字号与行高体系，以及 4pt 网格输出规则。',
    fontIntro:
      '目前仅使用无衬线、系统自带字体。MacOS 中文使用 PingFang SC，Windows 中文使用阿里巴巴普惠体 3.0，英文、数字与小语种第一字体统一使用 Ubuntu；若系统未安装 Ubuntu，则回退至平台默认兼容字体。',
    fontStack:
      'font-family: "Helvetica", "Arial", "PingFang SC", "Alibaba PuHuiTi 3.0", "阿里巴巴普惠体3.0", "Ubuntu"',
    fontSelection: [
      { system: 'MacOS', chinese: '中文 PingFang SC', english: 'Helvetica', numeric: 'Helvetica' },
      { system: 'Windows', chinese: '中文 阿里巴巴普惠体3.0', english: 'Ubuntu', numeric: 'Ubuntu' },
      { system: 'Android', chinese: '中文 思源黑体', english: 'HarmonyOS Sans', numeric: 'HarmonyOS Sans' },
    ],
    specialLanguage: {
      description:
        '在所有系统中，阿拉伯文语言场景统一使用 Estedad 字体，避免系统默认字体带来的版式不一致问题。',
      sampleCn:
        '安道教育是一家位于粤港澳大湾区（东莞松山湖）的国家级高新技术企业，也是国内领先的智慧教育设备制造商和解决方案服务商。',
      sampleAr:
        'شركة أنداو للتعليم هي مؤسسة وطنية عالية التقنية تقع في منطقة الخليج الكبرى لمقاطعات قوانغدونغ وهونغ كونغ وماكاو، وهي أيضًا من الشركات الرائدة في تصنيع معدات التعليم الذكي وتقديم حلول الخدمات في الصين.',
    },
    scaleIntro:
      '行高并非固定等于字号的 1.5 倍。设计稿采用更贴近实际阅读体验的行高策略：大字号标题控制垂直松散感，小字号正文保持足够呼吸空间，并兼顾多种字号混排时的信息连贯性。',
    scale: [
      {
        name: 'Display 36',
        usage: '可视化/报告标题、关键数据展示',
        size: '36px',
        lineHeight: '44px',
        weight: '400 / 500 / 600',
        previewWeight: 500,
      },
      {
        name: 'Display 32',
        usage: '数字、特殊场景标题',
        size: '32px',
        lineHeight: '40px',
        weight: '400 / 500 / 600',
        previewWeight: 500,
      },
      {
        name: 'Heading 24',
        usage: '数据总览、特殊场景标题',
        size: '24px',
        lineHeight: '32px',
        weight: '400 / 500 / 600',
        previewWeight: 500,
      },
      {
        name: 'Heading 18',
        usage: '弹窗标题、数字',
        size: '18px',
        lineHeight: '26px',
        weight: '400 / 500 / 600',
        previewWeight: 500,
      },
      {
        name: 'Body 16',
        usage: '页面标题、正文',
        size: '16px',
        lineHeight: '24px',
        weight: '400 / 500 / 600',
        previewWeight: 500,
      },
      {
        name: 'Body 14',
        usage: '正文',
        size: '14px',
        lineHeight: '22px',
        weight: '400',
        previewWeight: 400,
      },
      {
        name: 'Caption 12',
        usage: '提示文本（桌面端最小）',
        size: '12px',
        lineHeight: '20px',
        weight: '400',
        previewWeight: 400,
      },
      {
        name: 'Caption 10',
        usage: '提示文本（移动端最小）',
        size: '10px',
        lineHeight: '14px',
        weight: '400',
        previewWeight: 400,
      },
    ],
    gridUnits: [
      ['4', '8', '12', '16', '20'],
      ['24', '32', '40', '48', '64'],
      ['80', '96', '120', '160'],
    ],
  },
  spacing: [
    { name: 'Space / 8', value: '8px', usage: '图标与文字、小型组件内部间距。', note: '微型间隔' },
    { name: 'Space / 12', value: '12px', usage: '表单标签、按钮内边距微调。', note: '次级间隔' },
    { name: 'Space / 16', value: '16px', usage: '卡片内容、列表项之间。', note: '基础模块间距' },
    { name: 'Space / 24', value: '24px', usage: '章节内部区块、组件预览与说明之间。', note: '页面级间距' },
  ],
  cornerSystem: {
    title: '圆角规范',
    description:
      '本节依据 Figma 节点 `457:1306` 的圆角规范页整理。页面按 5 个圆角等级组织基础 token，保证组件、容器和浮层使用同一套圆角语言。',
    intro:
      '圆角用于表达组件亲和度和信息层级。建议从 none / small / regular / medium / large 五档中选择，不再为单个组件临时定义独立圆角值。',
    items: [
      {
        token: 'border-radius-none',
        value: '0px',
        degree: '0°',
        label: '圆角-无',
        css: 'border-radius: 0px;',
        radius: 0,
      },
      {
        token: 'border-radius-small',
        value: '4px',
        degree: '4°',
        label: '圆角-小',
        css: 'border-radius: 4px;',
        radius: 4,
      },
      {
        token: 'border-radius-regular',
        value: '8px',
        degree: '8°',
        label: '圆角-常规',
        css: 'border-radius: 8px;',
        radius: 8,
      },
      {
        token: 'border-radius-medium',
        value: '16px',
        degree: '16°',
        label: '圆角-中等',
        css: 'border-radius: 16px;',
        radius: 16,
      },
      {
        token: 'border-radius-large',
        value: '24px',
        degree: '24°',
        label: '圆角-较大',
        css: 'border-radius: 24px;',
        radius: 24,
      },
    ],
  },
  shadowSystem: {
    title: '投影规范',
    description:
      '本节依据 Figma 节点 `441:9557` 的投影规范页整理。页面按四个海拔层级组织投影，让信息容器、下拉层、悬浮提示和弹窗形成稳定的空间关系。',
    intro:
      '在物理世界中，物体之间可以相互叠加和拼接，但无法彼此交叉。界面中的阴影正是借用这一空间模型，帮助用户理解元素之间的高度距离与层次关系。',
    note:
      '投影可以帮助信息容器在页面中形成自然的空间关系。该指南意在帮助设计师合理运用投影，构建清晰的信息层次关系。',
    levels: [
      {
        level: 'Level 1',
        token: 'shadow-card',
        title: '第一层级',
        description: '用于直接铺陈在页面上方的元素，如卡片等基础信息容器。',
        usage: '适合卡片、基础信息块、列表项容器。',
        shadow: '0px 4px 16px 0px rgba(4, 38, 119, 0.08)',
        kind: 'card',
      },
      {
        level: 'Level 2',
        token: 'shadow-dropdown',
        title: '第二层级',
        description:
          '海拔高度略高于第一层级，多用于展开操作元素及有连接点的弹出层，如下拉菜单、级联菜单、日期选择器。',
        usage: '适合 Select 下拉、日期选择器、连接型覆盖层。',
        shadow: '0px 8px 24px 0px rgba(4, 38, 119, 0.08)',
        kind: 'dropdown',
      },
      {
        level: 'Level 3',
        token: 'shadow-tooltip',
        title: '第三层级',
        description: '海拔高度较高，多用于操作触发的悬浮元素或信息提示反馈，如 Tooltip、告警提示、Hover 卡片。',
        usage: '适合 Tooltip、Hover 卡片、轻量提示反馈。',
        shadow: '0px 4px 16px 0px rgba(4, 38, 119, 0.08)',
        kind: 'tooltip',
      },
      {
        level: 'Level 4',
        token: 'shadow-modal',
        title: '第四层级',
        description: '最高层级，与其他层级无连接点，通常用于独立弹出的覆盖层，如弹窗。',
        usage: '适合 Modal、强打断型确认框、全局浮层。',
        shadow: '0px 12px 36px 0px rgba(4, 38, 119, 0.12)',
        kind: 'modal',
      },
    ],
  },
  arcoShadowSystem: {
    title: 'Arco Shadow',
    description:
      'Arco 在界面中用阴影模拟元素的物理层级关系。清晰、自然的阴影可以帮助用户更快理解空间结构，因此这里将仓库中的阴影 token 与常见组件场景整理成可直接落地的规范展示。',
    intro:
      '仓库文档将阴影分为四个基础层级：特殊阴影、一级阴影、二级阴影和三级阴影。低层级元素默认使用一级阴影，常规交互操作使用二级阴影，需要被明显强调的顶部浮层则使用三级阴影或更高层级的组合表达。',
    note:
      '上方列出的是 Arco token 页中的标准命名；下方则按真实页面使用习惯改成更适合界面阅读的 downward 阴影示例，方便设计稿、规范文档和 React 代码直接对齐。',
    tokens: [
      {
        name: 'shadow-special',
        desc: '特殊阴影',
        value: '0 0 1px rgba(0, 0, 0, 0.3)',
      },
      {
        name: 'shadow1-center',
        desc: '阴影样式 1',
        value: '0 0 5px rgba(0, 0, 0, 0.1)',
      },
      {
        name: 'shadow2-center',
        desc: '阴影样式 2',
        value: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
      {
        name: 'shadow3-center',
        desc: '阴影样式 3',
        value: '0 0 20px rgba(0, 0, 0, 0.1)',
      },
    ],
    levels: [
      {
        level: 'Special',
        token: 'shadow-special',
        title: '特殊阴影',
        description: '用于极轻量的边界强化，不追求明显高度，更像给元素补一个精确的边缘存在感。',
        usage: '适合菜单边界、轻量浮层、窄边框强调和特殊态容器。',
        shadow: '0 0 1px rgba(0, 0, 0, 0.3)',
        kind: 'special',
      },
      {
        level: 'Level 1',
        token: 'shadow1-down',
        title: '一级阴影',
        description: '低层级元素的默认阴影，用于直接铺陈在页面表面上的基础信息容器。',
        usage: '适合卡片、基础信息块、列表项容器。',
        shadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        kind: 'card',
      },
      {
        level: 'Level 2',
        token: 'shadow2-down',
        title: '二级阴影',
        description: '常规交互操作产生的展开层，海拔高于一级阴影，适合带连接点或由控件展开的覆盖层。',
        usage: '适合 Select 下拉、日期选择器、级联菜单、连接型覆盖层。',
        shadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        kind: 'dropdown',
      },
      {
        level: 'Level 3',
        token: 'shadow3-down',
        title: '三级阴影',
        description: '用于需要被明显凸显的上层空间元素，强调悬浮感和与基础页面的层级分离。',
        usage: '适合 Tooltip、Popover、Notification、Hover 卡片。',
        shadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        kind: 'tooltip',
      },
      {
        level: 'Top Layer',
        token: 'shadow3-down + overlay',
        title: '顶层浮层',
        description: '仓库文档将弹窗视为与其他元素无连接点的最上层空间，通常在遮罩配合下使用最高层级阴影表达。',
        usage: '适合 Modal、强打断确认框、全局浮层。',
        shadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        kind: 'modal',
      },
    ],
  },
  buttonSystem: {
    title: '按钮规范',
    description:
      '本节依据 Figma 节点 `634:8283` 的按钮规范页整理，覆盖基础类型、状态、尺寸、图标按钮和块级按钮，方便设计与前端统一使用规则。',
    intro: '按钮是一种命令组件，可发起一个即时操作。',
    footnote:
      '大按钮高度 44、40；中按钮高度 36；小按钮高度 32。危险动作必须二次确认，提交中应展示 loading 并禁用重复点击。',
    sections: [
      {
        key: 'basic',
        title: '1. 基础用法',
        description: '按钮分为主要按钮、次要按钮、虚线按钮、线形按钮和文本按钮五种。',
        buttons: [
          { label: '安道教育', variant: 'primary' },
          { label: '安道教育', variant: 'secondary' },
          { label: '安道教育', variant: 'dashed' },
          { label: '安道教育', variant: 'outline' },
          { label: '安道教育', variant: 'text' },
        ],
      },
      {
        key: 'states',
        title: '2. 按钮状态',
        description: '按钮包含四种状态：默认（Default）、悬浮（Hover）、按下（Active）和禁用（Disabled）。',
        rows: [
          {
            label: '默认状态',
            buttons: [
              { label: '主要按钮', variant: 'primary' },
              { label: '次要按钮', variant: 'secondary' },
              { label: '虚线按钮', variant: 'dashed' },
              { label: '线形按钮', variant: 'outline' },
              { label: '文本按钮', variant: 'text' },
            ],
          },
          {
            label: '禁用状态',
            buttons: [
              { label: '主要按钮', variant: 'primary', state: 'disabled' },
              { label: '次要按钮', variant: 'secondary', state: 'disabled' },
              { label: '虚线按钮', variant: 'dashed', state: 'disabled' },
              { label: '线形按钮', variant: 'outline', state: 'disabled' },
              { label: '文本按钮', variant: 'text', state: 'disabled' },
            ],
          },
          {
            label: '悬停状态',
            buttons: [
              { label: '主要按钮', variant: 'primary', state: 'hover' },
              { label: '次要按钮', variant: 'secondary', state: 'hover' },
              { label: '虚线按钮', variant: 'dashed', state: 'hover' },
              { label: '线形按钮', variant: 'outline', state: 'hover' },
              { label: '文本按钮', variant: 'text', state: 'hover' },
            ],
          },
          {
            label: '按下状态',
            buttons: [
              { label: '主要按钮', variant: 'primary', state: 'active' },
              { label: '次要按钮', variant: 'secondary', state: 'active' },
              { label: '虚线按钮', variant: 'dashed', state: 'active' },
              { label: '线形按钮', variant: 'outline', state: 'active' },
              { label: '文本按钮', variant: 'text', state: 'active' },
            ],
          },
        ],
      },
      {
        key: 'sizes',
        title: '3. 按钮尺寸',
        description: '按钮分为大、中、小三种尺寸，以适应不同的场景需求。默认尺寸为中号（36px）。',
        sizes: [
          { label: '特大号按钮', size: 'lg', note: 'lg (44px)' },
          { label: '大按钮', size: 'big', note: 'Big Size (40px)' },
          { label: '主按钮', size: 'md', note: 'md (36px)' },
          { label: '小号按钮', size: 'sm', note: 'sm (32px)' },
        ],
      },
      {
        key: 'icons',
        title: '4. 图标按钮',
        description: '当需要在按钮内增加图标时，图标可以直观地传达按钮的操作意图。',
        buttons: [
          { label: '搜索', variant: 'primary', icon: 'search' },
          { label: '下载', variant: 'outline', icon: 'download' },
          { label: '设置', variant: 'secondary', icon: 'setting' },
          { label: '新建项目', variant: 'dashed', icon: 'plus' },
          { variant: 'primary', icon: 'search', iconOnly: true },
          { variant: 'outline', icon: 'plus', iconOnly: true },
          { label: '删除', variant: 'text-danger', icon: 'delete' },
          { variant: 'dark-circle', icon: 'plus', iconOnly: true },
          { label: '新增', variant: 'dark-pill', icon: 'plus-square' },
        ],
      },
      {
        key: 'block',
        title: '5. 块级按钮',
        description: '使按钮宽度适应其父元素的宽度，常用于弹窗底部的操作区或表单提交。',
        blocks: [
          { label: '确认提交', variant: 'primary' },
          { label: '返回上一步', variant: 'secondary' },
        ],
      },
    ],
  },
  tableSystem: {
    title: '数据表格规范',
    description:
      '本节依据 Figma 节点 `674:5513` 的表格规范页整理，输出多选表格、默认表格以及操作列图标/文字两种展示方式，方便设计与前端统一实现。',
    sections: [
      {
        key: 'multi-icon',
        title: '（带多选表格-操作列 图标展示）',
        selectable: true,
        actionType: 'icon',
      },
      {
        key: 'plain-icon',
        title: '（无多选表格-默认表格）',
        selectable: false,
        actionType: 'icon',
      },
      {
        key: 'multi-text',
        title: '（带多选表格-操作列 文字展示）',
        selectable: true,
        actionType: 'text',
      },
      {
        key: 'plain-text',
        title: '（无多选表格-默认表格-操作列 文字展示）',
        selectable: false,
        actionType: 'text',
      },
      {
        key: 'sort-filter',
        title: '排序和筛选',
        description: '通过排序图标与筛选图标展示表格在排序、筛选场景下的标准样式与交互规则。',
        filterOptions: ['34.23MB', '38.22MB', '46.66MB'],
        rows: [
          { name: '小明的学习资料', modifiedAt: '2026-04-10 18:00', size: '34.23MB' },
          { name: '小华的学习资料', modifiedAt: '2026-04-09 18:00', size: '38.22MB' },
          { name: '小华的学习资料', modifiedAt: '2026-04-08 18:00', size: '46.66MB' },
        ],
      },
    ],
    columns: ['文件名', '修改时间', '大小', '操作'],
    row: {
      name: '小明的学习资料',
      meta: '5个文件',
      modifiedAt: '2026-04-10 18:00',
      size: '34.23MB',
    },
  },
  tabsSystem: {
    title: '导航标签规范',
    description:
      '本节依据 Figma 节点 `683:5679` 的标签栏规范页整理。导航标签页用于在同级内容中切换，支持默认、禁用、不同尺寸以及筛选标签两类扩展形式。',
    intro: '导航标签页用于在同级内容中切换，支持线性、卡片、胶囊三种基础样式以及可关闭、垂直布局等扩展形式。',
    tabs: ['标签一', '标签二', '标签三', '标签四'],
    disabledIndex: 2,
    sizeGroups: [
      { label: 'Small (sm · 32px)', size: 'sm', tabs: ['标签一', '标签二', '标签三', '标签四', '标签五'] },
      { label: 'Medium (md · 40px)', size: 'md', tabs: ['标签一', '标签二', '标签三', '标签四', '标签五'] },
      { label: 'Large (lg · 48px)', size: 'lg', tabs: ['标签一', '标签二', '标签三', '标签四', '标签五'] },
      { label: 'Special 1 (Sc · 72px)', size: 'sc72', tabs: ['标签一', '标签二', '标签三', '标签四', '标签五'] },
      { label: 'Special 2 (Sc · 80px)', size: 'sc80', tabs: ['标签一', '标签二', '标签三', '标签四', '标签五'] },
    ],
    filterGroups: [
      {
        label: '单选筛选标签',
        items: [
          { key: 'list', icon: 'list', active: true },
          { key: 'grid', icon: 'grid' },
        ],
      },
      {
        label: '多选筛选标签',
        items: [
          { key: 'list-default', icon: 'list' },
          { key: 'grid-default', icon: 'grid' },
          { key: 'list-active', icon: 'list-active', active: true },
        ],
      },
    ],
  },
  inputSystem: {
    title: '输入框规范',
    description:
      '本节依据 Figma 节点 `473:1747` 的输入框规范页整理，并参考 Arco Input 文档的分组方式输出到当前规范站中。',
    intro:
      '输入框用于文本录入、筛选、检索、密码查看和日期选择等场景。文档按基础状态、带图标、横版表单、竖版表单和密码型五组整理，方便设计与开发对齐。',
    sections: [
        {
          key: 'basic',
          title: '1. 基础用法',
          description: '通过鼠标或键盘输入内容。',
          items: [
            {
              label: '基础输入框',
              type: 'text',
              placeholder: '请输入内容',
              state: 'default',
              interactive: true,
              helper: '默认展示常规状态；鼠标移入触发 Hover，点击后触发聚焦并可输入。',
            },
            {
              label: '错误状态',
              type: 'text',
              value: '请输入内容',
              state: 'error',
              helper: '你的内容存在错误',
            },
          ],
        },
        {
          key: 'icon',
          title: '2. 带图标输入框',
        description: '默认以带图标的常规输入框为主，通过同一个示例承载输入内容、hover 和聚焦状态。',
        items: [
          {
            label: '带图标输入框',
            type: 'text',
            placeholder: '请输入内容',
            state: 'default',
              prefix: 'search',
              clearable: true,
              interactive: true,
              helper: '默认展示常规状态；输入内容后显示清除入口，鼠标移入触发 Hover，点击后触发聚焦并可输入。',
            },
            {
              label: '错误状态',
              type: 'text',
              value: '安道教育',
              state: 'error',
              prefix: 'search',
              clearable: true,
              helper: '你的内容存在错误',
            },
          ],
        },
        {
          key: 'form-horizontal',
          title: '3. 表单输入框 / 横板',
          description: '横版表单默认展示标题加输入框的基础组合。',
          items: [
            { caption: '输入-常规', type: 'text', orientation: 'horizontal', required: true, label: '安道教育', placeholder: 'Please Enter' },
            {
              caption: '错误状态',
              type: 'text',
              orientation: 'horizontal',
              required: true,
              label: '安道教育',
              value: 'Please Enter',
              state: 'error',
              helper: '你的内容存在错误',
            },
          ],
        },
        {
          key: 'form-vertical',
          title: '4. 表单输入框 / 竖板',
          note: '考虑到多语言场景下，优先默认使用竖版表单输入框',
          description: '竖版表单默认展示标题加输入框的基础组合。通过同一个示例承载 Hover、聚焦和输入状态。',
          items: [
            { caption: '输入-常规', type: 'text', orientation: 'vertical', required: true, label: '安道教育', placeholder: 'Please Enter' },
            {
              caption: '错误状态',
              type: 'text',
              orientation: 'vertical',
              required: true,
              label: '安道教育',
              value: 'Please Enter',
              state: 'error',
              helper: '你的内容存在错误',
            },
          ],
        },
        {
          key: 'password',
          title: '5. 密码型输入框',
          description: '用于密码录入场景。默认展示隐藏内容状态，并通过右侧眼睛图标切换明文与密文。',
          items: [
            {
              type: 'password',
              interactive: true,
              value: 'password',
              placeholder: 'Please Enter',
            },
          ],
        },
    ],
  },
  dropdownSystem: {
    title: '选择器规范',
    description:
      '本节依据 Figma 节点 `496:3241` 的选择器规范页整理，覆盖关闭态、展开态、分组展示和空状态，便于设计与前端对齐。',
    intro: '选择器用于在多个备选项中进行单选。默认使用 36px 高度、8px 圆角和中性色描边，并在展开时保持输入框与菜单的视觉连续性。',
    sections: [
      {
        key: 'basic',
        title: '1. 基础表单状态',
        description: '默认展示选择器未展开的空状态，并通过同一个示例承载 Hover、聚焦、悬浮显清空和已选择的交互。',
        items: [
          {
            label: '基础下拉框',
            type: 'interactive-basic',
            placeholder: '请选择一项',
            helper: '默认展示空状态；鼠标移入触发 Hover，点击后聚焦并展开，选择后进入已选择状态，再次悬浮显示清空入口。',
          },
        ],
      },
        {
          key: 'open',
          title: '2. 菜单展开与高亮状态',
          description: '展示菜单强制展开时的视觉结构，包括列表选中项高亮、不可选项置灰。',
          items: [
            { label: 'Focus & Open (标准展开)', type: 'open-standard', value: 'Nuxt.js' },
            { label: 'Grouped (带分组展示)', type: 'open-grouped', value: 'Next.js' },
            { label: 'Empty (无数据)', type: 'open-empty', placeholder: '选择数据', query: 'Angular' },
          ],
        },
        {
          key: 'searchable',
          title: '3. 搜索功能支持 (Searchable)',
          description: '带搜索框的单选选择器，允许用户输入文字快速过滤列表。',
          items: [
            {
              label: '支持搜索的下拉框',
              type: 'interactive-searchable',
              placeholder: '输入以搜索...',
              helper: '右侧图标在聚焦展开后切换为搜索态；输入内容可过滤列表，选中后交互逻辑与基础下拉框保持一致。',
            },
          ],
        },
        {
          key: 'multiple',
          title: '4. 多选模式 (Multiple)',
          description: '支持同时选择多个值，以 Tag 标签的形式呈现在输入框内。',
          items: [
            {
              label: 'Multiple Normal (未展开的多选)',
              type: 'multiple-normal',
              helper: '默认展示已选标签，点击后展开多选列表。',
            },
            {
              label: 'Multiple Disabled (禁用的多选)',
              type: 'multiple-disabled',
              helper: '禁用态保留已选标签展示，但不可继续操作。',
            },
            {
              label: 'Multiple Clearable (悬浮一键清空)',
              type: 'multiple-clearable',
              helper: '鼠标移入且存在已选值时，右侧显示一键清空入口。',
            },
            {
              label: 'Multiple Opened (多选列表展开)',
              type: 'multiple-opened',
              helper: '多选列表点击后不会关闭，支持多个选项同时打钩。',
            },
          ],
        },
      ],
    },
  timePickerSystem: {
    title: '时间选择器规范',
    description:
      '本节基于现有输入框与选择器规范产出时间选择器样式，统一使用 36px 高度、8px 圆角、Gray-9 正文色、Gray-5 占位色，以及 Blue-6 焦点描边和二级下拉投影。',
    intro: '时间选择器用于录入时分。默认保持空态；鼠标移入触发 Hover，点击展开时间面板，选择后回填到选择器中。',
    sections: [
      {
        key: 'basic',
        title: '1. 基础用法',
        description: '通过一个可交互示例承载默认、Hover、聚焦展开和已选中时间的交互状态。',
        items: [
          {
            label: '基础时间选择器',
            type: 'interactive-time',
            placeholder: '请选择时间',
            helper: '默认沿用选择器 194px 宽度、8px 圆角和 Gray-9 文本色；展开面板使用 shadow2-down 投影。',
            options: ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30'],
          },
          {
            label: '开始时间 - 结束时间',
            type: 'interactive-time-range',
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            helper: '范围时间选择器沿用同样的圆角、文本色和 Hover / Focus 规则，开始与结束时间分别独立选择。',
          },
        ],
      },
    ],
  },
  modalSystem: {
    title: '弹窗规范',
    description:
      '本节依据 Figma 节点 `785:2644` 的弹窗规范页整理，覆盖说明型弹窗、确认型弹窗、危险操作弹窗和表单录入弹窗，并复用当前站点已定义的按钮、输入框、圆角和投影规范。',
    intro: '弹窗属于最高层级浮层，默认使用 16px 圆角、深色遮罩背景和 shadow-modal 投影。正文说明使用 Gray-9，次级信息使用 Gray-7，底部操作区延续按钮规范中的 36px 中按钮。',
    items: [
      {
        key: 'info-ack',
        type: 'info',
        title: '信息提示弹窗',
        body: '用于纯说明、非风险动作。标题写动作目的，正文包含对象与下一步。',
        actions: [{ label: '我知道了', variant: 'primary', width: 98 }],
      },
      {
        key: 'info-confirm',
        type: 'info-confirm',
        title: '信息提示弹窗',
        body: '课程已发布到 2 个班级，学生可在学习任务中查看。你可以继续查看发布详情。',
        actions: [
          { label: '取消', variant: 'outline-muted', width: 88 },
          { label: '确定', variant: 'primary', width: 88 },
        ],
      },
      {
        key: 'danger-confirm',
        type: 'danger-confirm',
        title: '删除提示',
        body: '课程已发布到 2 个班级，学生可在学习任务中查看。你可以继续查看发布详情。',
        actions: [
          { label: '取消', variant: 'outline-muted', width: 88 },
          { label: '删除课程', variant: 'danger', width: 94 },
        ],
      },
      {
        key: 'form-basic',
        type: 'form',
        title: '创建分类',
        divider: true,
        fields: [
          { label: '安道教育', required: true, placeholder: 'Please Enter' },
          { label: '安道教育', required: true, placeholder: 'Please Enter' },
        ],
        actions: [
          { label: '取消', variant: 'outline-muted', width: 88 },
          { label: '确定', variant: 'primary', width: 88 },
        ],
      },
      {
        key: 'danger-warning',
        type: 'danger-warning',
        title: '删除提示',
        body: '课程已发布到 2 个班级，学生可在学习任务中查看。你可以继续查看发布详情。',
        warning: '高风险操作需展示影响范围，并在提交中禁用关闭。',
        actions: [
          { label: '取消', variant: 'outline-muted', width: 88 },
          { label: '确认下线课程', variant: 'danger', width: 120 },
        ],
      },
      {
        key: 'form-plain',
        type: 'form',
        title: '创建分类',
        divider: false,
        fields: [
          { label: '安道教育', required: true, placeholder: 'Please Enter' },
          { label: '安道教育', required: true, placeholder: 'Please Enter' },
        ],
        actions: [
          { label: '取消', variant: 'outline-muted', width: 88 },
          { label: '确定', variant: 'primary', width: 88 },
        ],
      },
    ],
  },
  switchSystem: {
    title: 'switch规范',
    description:
      '本节依据 Figma 节点 `785:2791` 的 switch 规范页整理，并复用当前站点的颜色、圆角与交互规范。开关用于即时生效配置，默认使用 44×24 的轨道尺寸与 16px 旋钮。',
    intro: '开关适用于即时生效配置；若会影响学生端或数据范围，需要确认弹窗。',
    sections: [
      {
        key: 'radio',
        title: 'Radio',
        description: '单选框用于在同级选项中进行互斥选择，默认展示基础形态，并通过点击切换选中项。',
        items: [
          { label: '按学校分布', kind: 'default' },
          { label: '按班级分布', kind: 'checked' },
        ],
      },
      {
        key: 'checkbox',
        title: 'Checkbox',
        description: '多选框用于非互斥选择，默认展示基础形态，并通过点击循环切换默认、选中和半选三种状态。',
        items: [
          { label: '同步通知学生', kind: 'default' },
          { label: '允许补交', kind: 'checked' },
          { label: '半选状态', kind: 'indeterminate' },
        ],
      },
        {
          key: 'basic',
          title: 'Switch',
          description: '展示关闭与开启的标准开关样式。',
          items: [
            { label: '关闭状态', defaultChecked: false },
            { label: '开启状态', defaultChecked: true },
          ],
        },
      ],
    },
  cardSystem: {
    title: '卡片规范',
    description:
      '本节依据 Figma 节点 `787:2840` 的卡片规范页整理，覆盖极简卡片、描边卡片、Header 卡片、Footer 卡片和主色描边卡片，并复用当前站点已定义的圆角、投影、中性色和主色规范。',
    intro: '卡片用于承载相对独立的信息块，默认使用 16px 圆角和 shadow-card 投影。按内容结构可分为仅内容、带标题栏、带底部栏和强调描边几种形式。',
    items: [
      {
        key: 'plain',
        type: 'plain',
        title: '极简卡片-仅有内容的卡片形式',
        body: '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。',
      },
      {
        key: 'bordered',
        type: 'bordered',
        title: '极简卡片-仅有内容的卡片形式-带边框',
        body: '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。',
      },
      {
        key: 'header',
        type: 'header',
        title: '带 header 的卡片',
        headerTitle: '标题',
        actionText: '操作',
        body: '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。',
      },
      {
        key: 'footer',
        type: 'footer',
        title: '带 footer 的卡片',
        footerTitle: '标题',
        footerMeta: ['次级文本', '数据分类'],
        footerNote: '由极简卡片下方的底部栏组成，可包含标题、图片、状态等内容。',
      },
      {
        key: 'primary-bordered',
        type: 'primary-bordered',
        title: '极简卡片-仅有内容的卡片形式-带主色边框',
        body: '仅有内容区域的卡片形式。卡片内容区域可以是文字、图片、表单、表格等形式信息内容。可使用大中小不同的卡片尺寸，按业务需求进行呈现。',
      },
    ],
  },
  emptyStateSystem: {
    title: '空状态规范',
    description:
      '本节依据 Figma 节点 `787:2912` 的空状态规范页整理，覆盖基础空状态与带操作空状态，并复用当前站点的按钮、文字色与留白规范。',
    intro: '空状态用于反馈当前列表、页面或容器暂无可展示内容。默认以 120px 插画图形、Gray-7 文案和可选主按钮组合呈现。',
    items: [
      {
        key: 'basic',
        title: '基础的空状态',
        text: '暂无数据',
        action: null,
      },
      {
        key: 'actionable',
        title: '带操作的空状态',
        text: '暂无数据',
        action: '返回首页',
      },
    ],
  },
  components: [
    {
      kind: 'button',
      variant: 'primary',
      name: 'Primary Button',
      label: 'Create Spec',
      note: '用于核心确认动作。后续建议把按钮状态也按 Figma 规范拆成 default、hover、disabled 三组。',
      spec: '40px / Radius 6 / Blue-6',
    },
    {
      kind: 'button',
      variant: 'secondary',
      name: 'Secondary Button',
      label: 'View Tokens',
      note: '用于次级操作，和主按钮并列时保持清晰层级。',
      spec: '40px / Border 1 / Gray-3',
    },
    {
      kind: 'input',
      name: 'Text Field',
      label: 'Component Name',
      placeholder: '例如：Button / Primary / Large',
      note: '适合录入组件名称、尺寸或状态字段，后续可补充默认态、悬浮态和错误态。',
      spec: '40px / Radius 6 / Border #E5E8EE',
    },
    {
      kind: 'input',
      name: 'Description Field',
      label: 'Usage Rule',
      placeholder: '描述组件使用场景与注意事项',
      note: '承载组件说明、交互规则和禁用条件，适合作为组件文档标准字段。',
      spec: 'Label + Input / Compact Form',
    },
  ],
}
