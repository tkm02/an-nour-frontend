import React from 'react'
import { Table } from 'antd';
import "./EnregistrementRecents.css"
const EnregistrementRecents = ({data}) => {

    const columns = [
        {
          title: "Matricule",
          dataIndex: "matricule",
          key: "matricule",
        },
        {
          title: "Nom & Prénoms",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Genre",
          dataIndex: "gender",
          key: "gender",
        },
        {
          title: "Dortoir",
          dataIndex: "dormitory",
          key: "dormitory",
        },
        {
          title: "Lieu d'habitation",
          dataIndex: "residence",
          key: "residence",
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date",
        },
      ];

      const tableData = data.map((item, index) => ({
        key: index, // Ant Design exige une clé unique pour chaque ligne
        ...item,
      }));
  return (
    <div className="EnregistrementRecents-tableau">
      <h2 style={{ marginBottom: "16px", color: "#003f87",textAlign:"start" }}>Enregistrements récents</h2>
      <Table
        dataSource={tableData}
        columns={columns}
        pagination={false} // Désactive la pagination pour une vue complète
        bordered
      />
    </div>
  )
}

export default EnregistrementRecents
