const BoardIcon: React.FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="12"
        y="2"
        width="10"
        height="10"
        rx="1"
        className="icon-fill-blue"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 1C13.4477 1 13 1.44772 13 2V10C13 10.5523 13.4477 11 14 11H22C22.5523 11 23 10.5523 23 10V2C23 1.44772 22.5523 1 22 1H14ZM15 3V9H21V3H15Z"
        className="icon-fill-grey"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 14C1 13.4477 1.44772 13 2 13H10C10.5523 13 11 13.4477 11 14V22C11 22.5523 10.5523 23 10 23H2C1.44772 23 1 22.5523 1 22V14ZM3 21V15H9V21H3Z"
        className="icon-fill-grey"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13 14C13 13.4477 13.4477 13 14 13H22C22.5523 13 23 13.4477 23 14V22C23 22.5523 22.5523 23 22 23H14C13.4477 23 13 22.5523 13 22V14ZM15 21V15H21V21H15Z"
        className="icon-fill-grey"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1 2C1 1.44772 1.44772 1 2 1H10C10.5523 1 11 1.44772 11 2V10C11 10.5523 10.5523 11 10 11H2C1.44772 11 1 10.5523 1 10V2ZM3 9V3H9V9H3Z"
        className="icon-fill-grey"
      />
    </svg>
  );
};

export default BoardIcon;
