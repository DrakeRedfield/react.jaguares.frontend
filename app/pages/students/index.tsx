import Card from "~/components/card";
import Table from "~/components/table";
import SearchInput from '~/components/forms/search-input';
import { Pagination } from "~/components/pagination/basic";
import { usePagination } from "~/hooks/usePagination";
import Modal from "~/components/modal/basic";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

type IStudent = {
  id: number;
  name: string;
  lastName: string;
  belt: string;
  age: number;
}

const students = [
  { id: 1, name: "Juan", lastName: "Pérez 1", belt:'Amarilla', age: 20 },
  { id: 2, name: "Juan", lastName: "Pérez 2", belt:'Amarilla', age: 20 },
  { id: 3, name: "Juan", lastName: "Pérez 3", belt:'Amarilla', age: 20 },
  { id: 4, name: "Juan", lastName: "Pérez 4", belt:'Amarilla', age: 20 },
  { id: 5, name: "Juan", lastName: "Pérez 5", belt:'Amarilla', age: 20 },
  { id: 6, name: "Juan", lastName: "Pérez 6", belt:'Amarilla', age: 20 }
]

export default function Students () {
  const { currentPage, setCurrentPage } = usePagination({ initialPage: 1 });
  const [studentSelected, setStudentSelected] = useState<IStudent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState({'details': false, 'delete': false});
  const navigate = useNavigate();
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }
  const closeModals = () => {
    setIsModalOpen({ 'details': false, 'delete': false });
    setStudentSelected(null);
  }

  const onOpenModal = (student: IStudent) => {
    setIsModalOpen({'details': true, 'delete': false});
    setStudentSelected(student);
  }

  const onOpenConfirmationModal = (student: IStudent) => {
    setIsModalOpen({ 'details': false, 'delete': true });
    setStudentSelected(student);
  }

  const onDeleteStudent = () => {
    console.log('Eliminando alumno', studentSelected);
    closeModals();
  }

  return <>
    <div className="p-(--container-padding)">
      <Card> 
        <Card.Title>Alumnos</Card.Title>
        <Card.Body className="w-full grid gap-4 grid-cols-1">
          <SearchInput debounce={false} className="lg:w-[50%] lg:place-self-end" onSearch={(result) => console.log(result)} />
          <Link to={'nuevo'} className="px-2 py-1 bg-(--blue-tkd) text-white rounded cursor-pointer font-bold text-center hover:bg-(--light-blue-tkd) lg:place-self-start">Registrar alumno</Link>
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.Row>
                  <Table.CellHeader>Acciones</Table.CellHeader>
                  <Table.CellHeader>Nombre</Table.CellHeader>
                  <Table.CellHeader>Apellido</Table.CellHeader>
                  <Table.CellHeader>Edad</Table.CellHeader>
                  <Table.CellHeader>Cinta</Table.CellHeader>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Content data={students} isLoading={false} colSpan={4} emptyMessage="No hay alumnos registrados" loadingRows={5}
                  renderRow={(student) => (
                    <Table.Row className="hover:bg-gray-100" key={student.id}>
                      <Table.Cell className="relative ">
                        <Table.ActionsMenu actions={[
                          { label: "Ver detalles", onClick: () => { onOpenModal(student) } },
                          { label: "Editar", onClick: () => { navigate(`edit/${student.id}`) } },
                          { label: "Eliminar", onClick: () => { onOpenConfirmationModal(student)} }
                        ]} />
                      </Table.Cell>
                      <Table.Cell>{student.name}</Table.Cell>
                      <Table.Cell>{student.lastName}</Table.Cell>
                      <Table.Cell>{student.age}</Table.Cell>
                      <Table.Cell>{student.belt}</Table.Cell>
                    </Table.Row>
                  )} />
              </Table.Body>
            </Table>
          </div>
          <Pagination currentPage={currentPage} totalPages={5} onPageChange={(page) => handlePageChange(page)} />
        </Card.Body>
      </Card>
    </div>
    <Modal open={isModalOpen.details} onClose={() => closeModals()} title="Información del alumno" variant="default">
      <Modal.Content>
        <p><strong>Nombre: </strong>{studentSelected?.name}</p>
        <p><strong>Apellido: </strong>{studentSelected?.lastName}</p>
        <p><strong>Cinta: </strong>{studentSelected?.belt}</p>
        <p><strong>Edad: </strong>{studentSelected?.age}</p>
      </Modal.Content>
    </Modal>
    <Modal open={isModalOpen.delete} onClose={() => closeModals()} title="Información del alumno" variant="warning">
      <Modal.Content>
        <p>¿Está seguro de dar de baja a {studentSelected?.name} {studentSelected?.lastName}? </p>
      </Modal.Content>
      <Modal.Footer>
        <div className="flex gap-2 justify-end">
          <button className="bg-(--blue-tkd) text-white px-2 py-1 rounded" onClick={() => closeModals()}>Cancelar</button>
          <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDeleteStudent()}>Eliminar</button>
        </div>
      </Modal.Footer>
    </Modal>
  </>
}