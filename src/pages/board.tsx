import './board.scss';

const BoardPage: React.FC = () => {
  return (
    <>
      <h4 className="title">Board</h4>
      <div className="board">
        <div className="board-column">
          <div className="column-header">
            <span>TO DO</span>
            <span className="column-header__item-number">2</span>
          </div>
        </div>
        <div className="board-column">
          <div className="column-header">
            <span>In Progress</span>
            <span className="column-header__item-number">4</span>
          </div>
        </div>
        <div className="board-column">
          <div className="column-header">
            <span>Done</span>
            <span className="column-header__item-number">3</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoardPage;
