import { FC } from 'react';
import { useRecoilValueLoadable, RecoilValueReadOnly } from "node_modules/recoil";
import { quoteQuery } from 'recoil/quote-atoms';

interface RandomQuoteInterface { }

const useRecoilAPI = (query: RecoilValueReadOnly<unknown>) => {
  const { state, contents } = useRecoilValueLoadable(query);
  return {
    loading: state === 'loading',
    response: contents ? contents : null
  };
}

const RandomQuote: FC<RandomQuoteInterface> = (): JSX.Element => {

  const {
    loading,
    response: {
      success,
      data
    }
  } = useRecoilAPI(quoteQuery);

  return loading ?
    <>
      <div className="loading">
        <p>
          Loading...
        </p>
      </div>
    </>
    :
    <>
      <div className="content">
        <p style={{ fontStyle: success ? 'italic' : 'normal' }}>
          {success ? `"${data.text}"` : 'No item found'}
        </p>
      </div>
    </>
}

export { RandomQuote }
