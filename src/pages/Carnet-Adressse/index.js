import React from 'react';
import './styles.scss';
import { listProfessors } from 'services/professors';
import { Table, Tr, Td } from 'components/Table';

class CarnetAdresse extends React.Component {
  render = () => {
    return (
      <div className="carnet-adresse-content">
        <Table>
          <Tr className="tr-entete">
            <Td>Nom</Td>
            <Td>Matière</Td>
            <Td>Adresse Mail</Td>
          </Tr>
          { listProfessors.map((professor) => {
            return (
              <Tr className="tr-tableau">
                <Td className="td-tableau">{professor.name}</Td>
                <Td className="td-tableau">{professor.mail}</Td>
                <Td className="td-tableau">{professor.matiere}</Td>
              </Tr>
            );
          }) }
        </Table>
      </div>
    );
  }
}

export default CarnetAdresse;