import type { NextApiRequest, NextApiResponse } from 'next'

type Response = {
  success: boolean,
  data: Data | {}
}

type Data = {
  id: number;
  text: string;
}

const data: Data[] = [
  {
    id: 1,
    text: 'Cras suscipit velit at faucibus ullamcorper.'
  },
  {
    id: 2,
    text: 'Duis nulla tortor, auctor id lacus non, ultricies.'
  },
  {
    id: 3,
    text: 'Sed mattis mauris et aliquam nulla.'
  },
  {
    id: 4,
    text: 'Sed at sodales sem ut dui venenatis, vulputate.'
  },
  {
    id: 5,
    text: 'Vivamus elementum lacus tincidunt lacus mollis.'
  },
  {
    id: 6,
    text: 'Pellentesque habitant morbi tristique senectus.'
  }
]

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {

  const { id }: any = req.query;
  const item = data.find(({ id: _id }) => _id == id);

  res.status(200).json({
    success: !!item,
    data: item || {}
  });

}