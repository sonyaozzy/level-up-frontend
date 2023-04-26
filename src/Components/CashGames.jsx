import InfoTrigger from './InfoTrigger';
import TopTable from './TopTable';

const CashGames = () => {
  return (
    <div className="custom-tops">
      <div className="custom-table-name-div">
          <p className="custom-table-name">
            1₾ რეიკი = 1 ქულას
          </p>
      </div>
      <div className="top20-text">
        <span>ჰოლდემის TOP20 ლიდერბორდი</span>
        <InfoTrigger/>
      </div>
      <TopTable/>
    </div>
  );
};

export default CashGames;