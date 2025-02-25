import UserTable from "../components/ui/tables/userTable"; 
import { PageContainer, PageTitle } from "../styles/Tables/tablePage.styles";

const Table = () => {
  return (
    <PageContainer>
      <PageTitle>Table Page</PageTitle>
      <UserTable />
    </PageContainer>
  );
};

export default Table;