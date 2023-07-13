import React from "react";

interface CalBtnprops {
  btnTxt: string;
};

const CalBtn = ({ btnTxt }: CalBtnprops) => {
  return (
    <button className="border-2 border-green-600 p-5 rounded-lg hover:bg-green-500">
      {btnTxt}
    </button>
  );
};

export default CalBtn;
