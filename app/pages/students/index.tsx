import Card from "~/components/card";
import Table from "~/components/table";

const students = [
  { id: 1, name: "Juan", lastName: "Pérez 1", belt:'Amarilla', age: 20 },
  { id: 2, name: "Juan", lastName: "Pérez 2", belt:'Amarilla', age: 20 },
  { id: 3, name: "Juan", lastName: "Pérez 3", belt:'Amarilla', age: 20 },
  { id: 4, name: "Juan", lastName: "Pérez 4", belt:'Amarilla', age: 20 },
  { id: 5, name: "Juan", lastName: "Pérez 5", belt:'Amarilla', age: 20 },
  { id: 6, name: "Juan", lastName: "Pérez 6", belt:'Amarilla', age: 20 }
]

export default function Students () {
  return <>
    <div className="p-(--container-padding)">
      <Card> 
        <Card.Title>Alumnos</Card.Title>
        <Card.Body>
          
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
              )}/>
            </Table.Body>
          </Table>
        </Card.Body>
      </Card>
    </div>
  </>
}