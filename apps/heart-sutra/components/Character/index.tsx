import React from 'react';
import styles from './styles.module.less';

type Props = {
  content: string;
  ruby: string;
  textLevel?: number;
};

const Character = ({ content, ruby, textLevel }: Props) => {
  return (
    <ruby>
      <span
        className={`${styles.content} ${
          textLevel ? `${styles['text-' + textLevel]}` : ''
        }`}
      >
        {content}
      </span>
      <rt>
        <span
          className={`${styles.ruby} ${
            textLevel ? `${styles['text-' + Math.min(textLevel + 3, 7)]}` : ''
          }`}
        >
          {ruby}
        </span>
      </rt>
    </ruby>
  );
};

export default Character;
