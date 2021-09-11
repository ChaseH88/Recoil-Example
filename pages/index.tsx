import { Layout } from '~/components/Layout';
import { ToDoList } from '~/components/ToDoList';
import { CreateToDoItem } from '~/components/CreateToDoItem';

const IndexPage = () => (
  <>
    <Layout>
      <CreateToDoItem />
      <ToDoList />
    </Layout>
  </>
)

export default IndexPage
