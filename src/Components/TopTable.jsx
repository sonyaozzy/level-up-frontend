import Table from 'react-bootstrap/Table';

const prizes = [
  { "place": "1", "voucher": "-", "prize": "A კატეგორიის საგზური" },
  { "place": "2", "voucher": "-", "prize": "B კატეგორიის საგზური" },
  { "place": "3", "voucher": "1 500 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "4", "voucher": "1 200 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "5", "voucher": "1 000 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "6", "voucher": "800 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "7", "voucher": "700 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "8", "voucher": "600 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "9", "voucher": "500 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "10", "voucher": "500 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "11", "voucher": "500 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "12", "voucher": "500 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "13", "voucher": "400 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "14", "voucher": "400 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "15", "voucher": "400 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "16", "voucher": "400 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "17", "voucher": "300 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "18", "voucher": "300 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "19", "voucher": "300 ₾", "prize": "სპეც. ტურნირის ბილეთი" },
  { "place": "20", "voucher": "300 ₾", "prize": "სპეც. ტურნირის ბილეთი" }
];

const TopTable = () => {
  return (
    <Table className="table-borderless">
      <thead className="custom-head">
        <tr>
          <th className="custom-place">ადგილი</th>
          <th className="custom-voucher">ვაუჩერი</th>
          <th className="custom-prize">პრიზი</th>
        </tr>
      </thead>
      <tbody>
        {prizes.map(({ place, voucher, prize }) => (
          <tr className="custom-tr" key={place}>
            <td className="custom-place">
              <div className="place-round">{place}</div>
              </td>
            <td className="custom-voucher">{voucher}</td>
            <td className="custom-prize">{prize}</td>
          </tr>
          )
        )}
      </tbody>
    </Table>
  );
}

export default TopTable;