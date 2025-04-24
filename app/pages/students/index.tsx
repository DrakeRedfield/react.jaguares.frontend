import Card from "~/components/card";
import Table from "~/components/table";
import SearchInput from '~/components/inputs/search-input';
import { Pagination } from "~/components/pagination/basic";
import { usePagination } from "~/hooks/usePagination";

const students = [
  { id: 1, name: "Juan", lastName: "Pérez 1", belt:'Amarilla', age: 20 },
  { id: 2, name: "Juan", lastName: "Pérez 2", belt:'Amarilla', age: 20 },
  { id: 3, name: "Juan", lastName: "Pérez 3", belt:'Amarilla', age: 20 },
  { id: 4, name: "Juan", lastName: "Pérez 4", belt:'Amarilla', age: 20 },
  { id: 5, name: "Juan", lastName: "Pérez 5", belt:'Amarilla', age: 20 },
  { id: 6, name: "Juan", lastName: "Pérez 6", belt:'Amarilla', age: 20 }
]

export default function Students () {
  const {currentPage, setCurrentPage} = usePagination({ initialPage: 1 });
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }
  return <>
    <div className="p-(--container-padding)">
      <Card> 
        <Card.Title>Alumnos</Card.Title>
        <Card.Body className="w-full grid gap-4 grid-cols-1">
          <SearchInput debounce={false} className="lg:w-[50%] lg:place-self-end" onSearch={(result) => console.log(result)}/>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.Row>
                  <Table.CellHeader>Nombre</Table.CellHeader>
                  <Table.CellHeader>Apellido</Table.CellHeader>
                  <Table.CellHeader>Edad</Table.CellHeader>
                  <Table.CellHeader>Cinta</Table.CellHeader>
                  <Table.CellHeader>Acciones</Table.CellHeader>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Content data={students} isLoading={false} colSpan={4} emptyMessage="No hay alumnos registrados" loadingRows={5}
                  renderRow={(student) => (
                    <Table.Row className="hover:bg-gray-100" key={student.id}>
                      <Table.Cell>{student.name}</Table.Cell>
                      <Table.Cell>{student.lastName}</Table.Cell>
                      <Table.Cell>{student.age}</Table.Cell>
                      <Table.Cell>{student.belt}</Table.Cell>
                      <Table.Cell>
                        <Table.ActionsMenu actions={[{ label: "Editar", onClick: () => { } }, { label: "Eliminar", onClick: () => { } }]} />
                      </Table.Cell>
                    </Table.Row>
                  )} />
              </Table.Body>
            </Table>
          </div>
          <Pagination currentPage={currentPage} totalPages={5} onPageChange={(page) => handlePageChange(page)} />
        </Card.Body>
      </Card>
    </div>
  </>
}