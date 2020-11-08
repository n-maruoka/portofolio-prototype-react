// src/components/Ranking.js
import React from 'react';
import PropTypes from 'prop-types';

export default function Ranking({ categoryId }) {
  // 最終的にはcategoryIdを元にAPIから情報を取得したい
  return (
    <div>
      <h2>Rankingコンポーネント</h2>
      <p>カテゴリーID: {categoryId}</p>
    </div>
  )
}
Ranking.propTypes = {
  categoryId: PropTypes.string
};
Ranking.defaultProps = {
  // categoryId=1は総合ランキング
  categoryId: '1'
};
