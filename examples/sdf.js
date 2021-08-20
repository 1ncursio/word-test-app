[
  {
    chunk_info: {
      id: 0,
      head: 4,
      dep: 'D',
      chunk_head: 0,
      chunk_func: 6,
      links: [],
      predicate: ['past'],
    },
    tokens: [
      {
        id: 0,
        form: '打',
        kana: 'ウ',
        lemma: '打つ',
        pos: '動詞語幹',
        features: ['T'],
        dependency_labels: [
          { token_id: 1, label: 'aux' },
          { token_id: 2, label: 'aux' },
          { token_id: 3, label: 'aux' },
          { token_id: 4, label: 'aux' },
          { token_id: 5, label: 'mark' },
          { token_id: 6, label: 'case' },
          { token_id: 7, label: 'punct' },
        ],
        attributes: {},
      },
      {
        id: 1,
        form: 'っ',
        kana: 'ッ',
        lemma: 'っ',
        pos: '動詞活用語尾',
        features: [],
        attributes: {},
      },
      {
        id: 2,
        form: 'て',
        kana: 'テ',
        lemma: 'て',
        pos: '動詞接尾辞',
        features: ['接続', '連用'],
        attributes: {},
      },
      {
        id: 3,
        form: 'い',
        kana: 'イ',
        lemma: 'いい',
        pos: '形容詞語幹',
        features: ['Lて連用', 'イ段'],
        attributes: {},
      },
      {
        id: 4,
        form: 'い',
        kana: 'イ',
        lemma: 'い',
        pos: '形容詞接尾辞',
        features: ['連体'],
        attributes: {},
      },
      {
        id: 5,
        form: 'の',
        kana: 'ノ',
        lemma: 'の',
        pos: '補助名詞',
        features: [],
        attributes: {},
      },
      {
        id: 6,
        form: 'は',
        kana: 'ハ',
        lemma: 'は',
        pos: '連用助詞',
        features: [],
        attributes: {},
      },
      {
        id: 7,
        form: '、',
        kana: '',
        lemma: '、',
        pos: '読点',
        features: [],
        attributes: {},
      },
    ],
  },
  {
    chunk_info: {
      id: 1,
      head: 2,
      dep: 'D',
      chunk_head: 0,
      chunk_func: 3,
      links: [],
      predicate: ['passive'],
    },
    tokens: [
      {
        id: 8,
        form: '打',
        kana: 'ウ',
        lemma: '打つ',
        pos: '動詞語幹',
        features: ['T'],
        dependency_labels: [
          { token_id: 9, label: 'aux' },
          { token_id: 10, label: 'auxpass' },
          { token_id: 11, label: 'aux' },
        ],
        attributes: {},
      },
      {
        id: 9,
        form: 'た',
        kana: 'タ',
        lemma: 'た',
        pos: '動詞活用語尾',
        features: [],
        attributes: {},
      },
      {
        id: 10,
        form: 'れ',
        kana: 'レ',
        lemma: 'れる',
        pos: '動詞接尾辞',
        features: ['動詞語幹'],
        attributes: {},
      },
      {
        id: 11,
        form: 'る',
        kana: 'ル',
        lemma: 'る',
        pos: '動詞接尾辞',
        features: ['連体'],
        attributes: {},
      },
    ],
  },
  {
    chunk_info: {
      id: 2,
      head: 3,
      dep: 'D',
      chunk_head: 0,
      chunk_func: 1,
      links: [{ link: 1, label: 'adjectivals' }],
    },
    tokens: [
      {
        id: 12,
        form: '覚悟',
        kana: 'カクゴ',
        lemma: '覚悟',
        pos: '名詞',
        features: ['動作'],
        dependency_labels: [
          { token_id: 8, label: 'acl' },
          { token_id: 13, label: 'case' },
        ],
        attributes: {},
      },
      {
        id: 13,
        form: 'の',
        kana: 'ノ',
        lemma: 'の',
        pos: '格助詞',
        features: ['連体'],
        attributes: {},
      },
    ],
  },
  {
    chunk_info: {
      id: 3,
      head: 4,
      dep: 'D',
      chunk_head: 0,
      chunk_func: 0,
      links: [{ link: 2, label: 'adjectivals' }],
    },
    tokens: [
      {
        id: 14,
        form: 'ある',
        kana: 'アル',
        lemma: 'ある',
        pos: '連体詞',
        features: [],
        dependency_labels: [{ token_id: 12, label: 'nmod' }],
        attributes: {},
      },
    ],
  },
  {
    chunk_info: {
      id: 4,
      head: -1,
      dep: 'O',
      chunk_head: 0,
      chunk_func: 2,
      links: [
        { link: 0, label: 'agent' },
        { link: 3, label: 'adjectivals' },
      ],
      predicate: [],
    },
    tokens: [
      {
        id: 15,
        form: '奴',
        kana: 'ヤッコ',
        lemma: '奴',
        pos: '名詞',
        features: [],
        dependency_labels: [
          { token_id: 0, label: 'nsubj' },
          { token_id: 14, label: 'amod' },
          { token_id: 16, label: 'case' },
          { token_id: 17, label: 'cop' },
          { token_id: 18, label: 'punct' },
        ],
        attributes: {},
      },
      {
        id: 16,
        form: 'だけ',
        kana: 'ダケ',
        lemma: 'だけ',
        pos: '連用助詞',
        features: [],
        attributes: {},
      },
      {
        id: 17,
        form: 'だ',
        kana: 'ダ',
        lemma: 'だ',
        pos: '判定詞',
        features: ['終止'],
        attributes: {},
      },
      {
        id: 18,
        form: '。',
        kana: '',
        lemma: '。',
        pos: '句点',
        features: [],
        attributes: {},
      },
    ],
  },
];